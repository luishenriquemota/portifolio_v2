import { CardTech } from "../Card_Tech";
import { StyledTechs } from "./style";
import { skills } from "../../services/skills-db";
export const Technologies = () => {
  return (
    <StyledTechs id="techs" className="container small">
      <h2>Tecnologias</h2>
      <ul>
        {skills.map((item, index) => (
          <CardTech key={index} name={item.name} image={item.image} />
        ))}
      </ul>
    </StyledTechs>
  );
};
