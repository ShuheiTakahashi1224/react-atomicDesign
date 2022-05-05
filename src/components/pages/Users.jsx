import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { SearchInput, UserCard, SecondaryButton } from "../index";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "山田 太郎",
    image: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "abc@example.com",
    group: {
      name: "hogehoge部"
    },
    website: "https://google.com"
  };
});

const SContainer = styled.div`
  text-align: center;
`;
const STitle = styled.h2`
  color: #333;
  margin: 16px 0 0;
`;
const SSearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
const SUsersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  margin-top: 16px;
  padding: 0 10px;
`;

const Users = () => {
  // const {userInfo, setUserInfo} = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <STitle>ユーザ一覧</STitle>
      <SSearchInputWrapper>
        <SearchInput />
      </SSearchInputWrapper>
      <SecondaryButton onClick={() => onClickSwitch()}>
        切り替え
      </SecondaryButton>
      <SUsersWrapper>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUsersWrapper>
    </SContainer>
  );
};

export default Users;
