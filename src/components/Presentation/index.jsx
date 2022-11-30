import { ParticlesComponent } from "../particles";
import { StyledPresentation } from "./styles";

export const Presentation = () => {
  return (
    <>
      <ParticlesComponent />
      <StyledPresentation className="container medium">
        <p>Olá, meu nome é</p>
        <h1>Luis Henrique,</h1>
        <h1> Sou Desenvolvedor Full-Stack.</h1>
        <p className="m12">
          Sou um desenvolvedor Full-Stack Junior, gosto de aprender coisas novas
          e de me desafiar, atualmente estou em busca da minha primeira vaga
          como desenvolvedor.
        </p>
        <button>Baixar Curriculo</button>
      </StyledPresentation>
    </>
  );
};
