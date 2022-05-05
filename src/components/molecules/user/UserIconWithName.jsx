import styled from "styled-components";
import { useContext } from "react";
import { Icon } from "../../index";
import { UserContext } from "../../../providers/UserProvider";

const SImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  margin: 0 auto;
`;
const SName = styled.p`
  color: #333;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 16px 0 0;
`;
const SEdit = styled.span`
  cursor: pointer;
  color: #aaa;
  text-decoration: underline;
`;

const UserIconWithName = (props) => {
  const { name, image } = props;
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <>
      <SImageWrapper>
        <Icon name={name} image={image} />
      </SImageWrapper>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </>
  );
};

export default UserIconWithName;
