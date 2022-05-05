import styled from "styled-components";
import { Card, UserIconWithName } from "../index";

const SDl = styled.dl`
  text-align: left;
`;
const SDescriptionWrapper = styled.div`
  display: flex;
  &:not(:first-child) {
    margin-top: 8px;
  }
`;
const SDescriptionTitle = styled.dt`
  flex: 0 0 110px;
`;
const SDescriptionDetail = styled.dd`
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: break-word;
`;

const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName name={user.name} image={user.image} />
      <SDl>
        <SDescriptionWrapper>
          <SDescriptionTitle>メールアドレス</SDescriptionTitle>
          <SDescriptionDetail>{user.email}</SDescriptionDetail>
        </SDescriptionWrapper>
        <SDescriptionWrapper>
          <SDescriptionTitle>所属</SDescriptionTitle>
          <SDescriptionDetail>{user.group.name}</SDescriptionDetail>
        </SDescriptionWrapper>
        <SDescriptionWrapper>
          <SDescriptionTitle>WEBサイト</SDescriptionTitle>
          <SDescriptionDetail>{user.website}</SDescriptionDetail>
        </SDescriptionWrapper>
      </SDl>
    </Card>
  );
};

export default UserCard;
