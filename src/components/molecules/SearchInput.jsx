import styled from "styled-components";
import { Input, PrimaryButton } from "../index";

const StyledButtonWrapper = styled.div`
  margin-left: 8px;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = () => {
  return (
    <StyledContainer>
      <Input placeholder={"検索条件を入力"} />
      <StyledButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </StyledButtonWrapper>
    </StyledContainer>
  );
};

export default SearchInput;
