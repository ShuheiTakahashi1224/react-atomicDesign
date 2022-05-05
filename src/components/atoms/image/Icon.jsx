import styled from "styled-components";

const SIcon = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
`;

const Icon = (props) => {
  const { name, image } = props;
  return <SIcon src={image} alt={name} />;
};

export default Icon;
