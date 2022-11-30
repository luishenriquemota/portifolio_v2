import { StyledAbout } from "./style";
import image from "../../assets/luis.jpg";

export const About = () => {
  return (
    <StyledAbout id="about" className="container small">
      <h2>Sobre Mim</h2>
      <div className="content">
        <div className="text">
          <p>
            Olá, meu nome é Luis Henrique, sou de São Paulo. Me tornei um
            desenvolvedor Full-Stack pela Kenzie Academy Brasil, em um curso com
            mais de 2000 horas de desenvolvimento web, onde aprendi as
            tecnologias necessárias para entrar no mercado de trabalho.
          </p>
          <p>
            Estou sempre buscando coisas novas para aprender, para me manter
            atualizado.
          </p>
          <p>
            Sempre gostei de tudo que envolve tecnologia, sempre quis entender
            como era que as ferramentas que eu utilizava no computador
            funcionavam, agora busco a oportunidade de trabalhar criando-as.
          </p>
        </div>
        <img src={image} alt="" />
      </div>
    </StyledAbout>
  );
};
