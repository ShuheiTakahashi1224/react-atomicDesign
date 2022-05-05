import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  background: #11999e;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SecondaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default SecondaryButton;
