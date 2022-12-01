import { StyledProjectCard } from "./styles";
import { TbExternalLink } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

export const ProjectCard = (props) => {
  const { image, name, description, techs, git, link, type } = props;

  return (
    <StyledProjectCard image={image}>
      <img src={image} alt={name} />

      <div className="content">
        <h3>
          <span>{type}</span>
          {name}
        </h3>
        <p>{description}</p>
        <ul>
          {techs.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="links">
          <AiFillGithub onClick={() => window.open(git, "_blank")} />
          <TbExternalLink onClick={() => window.open(link, "_blank")} />
        </div>
      </div>
    </StyledProjectCard>
  );
};
