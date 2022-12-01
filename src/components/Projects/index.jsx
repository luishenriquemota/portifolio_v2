import { ProjectCard } from "../Project_Card";
import { StyledProjects } from "./styles";
import Carousel from "react-elastic-carousel";
import { projects } from "../../services/projects-db";

export const Projects = () => {
  return (
    <StyledProjects id="projects" className="container small">
      <h2>Projetos</h2>
      <Carousel className="carousel" showArrows={false}>
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.title}
            image={item.image}
            description={item.description}
            techs={item.technologies}
            git={item.git}
            link={item.site}
            type={item.type}
          />
        ))}
      </Carousel>
    </StyledProjects>
  );
};
