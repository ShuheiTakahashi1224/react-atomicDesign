import styled from "styled-components";

const SCard = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px #ddd;
`;

const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

export default Card;
