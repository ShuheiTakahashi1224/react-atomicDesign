import styled from "styled-components";
import { Icon } from "../../index";

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

const UserIconWithName = (props) => {
  const { name, image } = props;
  return (
    <>
      <SImageWrapper>
        <Icon name={name} image={image} />
      </SImageWrapper>
      <SName>{name}</SName>
    </>
  );
};

export default UserIconWithName;
