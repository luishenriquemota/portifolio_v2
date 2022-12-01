import { HiMenu } from "react-icons/hi";
import { UseOpenModal } from "../../providers/ProviderOpenModal";
import { StyledHeader } from "./styles";
import image from "../../assets/Group 1.svg";

export const Header = () => {
  const { setOpenModal } = UseOpenModal();

  return (
    <StyledHeader>
      <nav className="container">
        <img src={image} alt="" />
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
        </ul>
        <HiMenu className="menu" onClick={() => setOpenModal(true)} />
      </nav>
    </StyledHeader>
  );
};
