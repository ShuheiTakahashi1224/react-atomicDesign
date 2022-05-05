import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 9999px;
  outline: none;
`;

const Input = (props) => {
  const { placeholder } = props;
  return <StyledInput type="text" placeholder={placeholder} />;
};

export default Input;
