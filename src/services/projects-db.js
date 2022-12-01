import ecoleta from "../assets/projects-images/Ecoleta.png";
import hamburgueriaKenzie from "../assets/projects-images/Hamburgueriakenzie.png";
import nukenzie from "../assets/projects-images/NuKenzie.png";
import kenziehub from "../assets/projects-images/KenzieHub.png";
import api_logo from "../assets/projects-images/api.png";

export const projects = [
  {
    type: "Front-End",
    site: "https://capstone-m3-mu.vercel.app/",
    git: "https://github.com/luishenriquemota/capstone-m3",
    image: ecoleta,
    title: "Ecoleta",
    description:
      "Site projetado em grupo como projeto final do curso de front-end, a proposta é um site que conecta pessoas que querem reciclar com pessoas ou empresas que reciclam. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "Front-End",
    site: "https://react-entrega-s2-kenzie-hub-luishenriquemota.vercel.app/",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-luishenriquemota",
    image: kenziehub,
    title: "KenzieHub",
    description:
      "gerenciador de tecnologias aprendidas, nela podemos colocar o que ja aprendemos e o nivel de conhecimento que temos sobre ela.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "Front-End",
    site: "https://react-entrega-s1-nu-kenzie-luishenriquemota.vercel.app/",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-luishenriquemota",
    image: nukenzie,
    title: "NuKenzie",
    description:
      "O site é um gerenciador de despesas, que facilita o planejamento dos nossos gastos no dia a dia. ",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "Front-End",
    site: "https://react-entrega-s1-hamburgueria-da-kenzie-luishe-luishenriquemota.vercel.app/",
    git: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-luishenriquemota",
    image: hamburgueriaKenzie,
    title: "Hamburgueria",
    description:
      "Um site que simula uma hamburgueria, nele podemos adicionar o produto ao carrinho e buscar produto pelo nome.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "Back-End",
    git: "https://github.com/luishenriquemota/Easy-iFinance",
    image: api_logo,
    title: "Easy iFinance",
    description: "API Financeiro",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    type: "Back-End",
    git: "https://github.com/victoriavianx/thinkwiki",
    image: api_logo,
    title: "Think Wiki",
    description:
      "Uma API para controlar os dados de um Wikipedia que aborda diversos nichos, onde podemos criar uma postagem com o tema que queremos, interagir com a postagem de alguém, entre outras coisas. ",
    technologies: [
      "Python",
      "Django",
      "Django-Rest-Framework",
      "PostgreSQL",
      "Heroku",
      "Coverage",
    ],
  },
];

export const projects_backEnd = [
  {
    git: "https://github.com/luishenriquemota/Easy-iFinance",
    image: api_logo,
    name: "API - Easy iFinance",
    // desc:
  },
  {
    git: "https://github.com/victoriavianx/thinkwiki",
    image: api_logo,
    name: "API - Think Wiki",
    // desc:
  },
];
