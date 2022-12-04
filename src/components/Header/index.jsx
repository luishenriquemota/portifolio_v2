import { HiMenu } from "react-icons/hi";
import { UseOpenModal } from "../../providers/ProviderOpenModal";
import { StyledHeader } from "./styles";
import image from "../../assets/lh-logo.svg";

export const Header = () => {
  const { setOpenModal } = UseOpenModal();

  return (
    <StyledHeader>
      <nav className="container">
        <a href="#top">
          <img src={image} alt="" />
        </a>
        <ul>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#technologies">Tecnologias</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
        <HiMenu className="menu" onClick={() => setOpenModal(true)} />
      </nav>
    </StyledHeader>
  );
};
