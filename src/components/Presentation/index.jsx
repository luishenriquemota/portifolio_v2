import { StyledPresentation } from "./styles";

export const Presentation = () => {
  return (
    <StyledPresentation id="top" className="container medium">
      <p>Olá, meu nome é</p>
      <h1>Luis Henrique,</h1>
      <h1> Sou Desenvolvedor Full-Stack.</h1>
      <p className="m12">
        Sou um desenvolvedor Full-Stack Junior, gosto de aprender coisas novas e
        de me desafiar, atualmente estou em busca da minha primeira vaga como
        desenvolvedor.
      </p>
      <a
        href="https://drive.google.com/u/0/uc?id=1Bq3q3eaoKlv25pOwaKd3dGp2ykPEM7xS&export=download"
        download="curriculo"
      >
        Baixar Curriculo
      </a>
    </StyledPresentation>
  );
};
