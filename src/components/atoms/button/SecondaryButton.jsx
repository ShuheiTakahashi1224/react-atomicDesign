import styled from "styled-components";
import { BaseButton } from "../../style";

const StyledButton = styled(BaseButton)`
  background: #11999e;
`;

const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
};

export default SecondaryButton;
