import { StyledProjectCard } from "./styles";
import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

export const ProjectCard = (props) => {
  const { image, name, description, techs, git, link } = props;

  return (
    <StyledProjectCard image={image}>
      <img src={image} alt={name} />

      <div className="content">
        <h3>
          <span>Front-End</span>
          {name}
        </h3>
        <p>{description}</p>
        <ul>
          {techs.map((item) => (
            <li>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="links">
          <AiFillGithub onClick={() => console.log(git)} />
          <TbExternalLink onClick={() => console.log(link)} />
        </div>
      </div>
    </StyledProjectCard>
  );
};
