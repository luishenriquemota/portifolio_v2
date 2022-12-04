import { StyledCardTech } from "./styles";

export const CardTech = (props) => {
  const { name, image } = props;
  return (
    <StyledCardTech>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </StyledCardTech>
  );
};
