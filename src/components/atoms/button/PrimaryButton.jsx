import styled from "styled-components";

const StyledButton = styled.button`
  color: #fff;
  background: #40514e;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const PrimaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default PrimaryButton;
