import styled from "styled-components";
import { BaseButton } from "../../style";

const StyledButton = styled(BaseButton)`
  background: #40514e;
`;

const PrimaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default PrimaryButton;
