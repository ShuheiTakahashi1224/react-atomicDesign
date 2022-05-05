import styled from "styled-components";
import { BaseButton } from "../../style";

const StyledButton = styled(BaseButton)`
  background: #11999e;
`;

const SecondaryButton = (props) => {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default SecondaryButton;
