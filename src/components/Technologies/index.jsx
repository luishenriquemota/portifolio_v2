import { CardTech } from "../Tech-Card";
import { StyledTechs } from "./style";
import { skills } from "../../services/skills-db";
export const Technologies = () => {
  return (
    <StyledTechs id="technologies" className="container small">
      <h2>Tecnologias</h2>
      <ul>
        {skills.map((item, index) => (
          <CardTech key={index} name={item.name} image={item.image} />
        ))}
      </ul>
    </StyledTechs>
  );
};
