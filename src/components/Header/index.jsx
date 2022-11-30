import { HiMenu } from "react-icons/hi";
import { UseOpenModal } from "../../providers/ProviderOpenModal";
import { StyledHeader } from "./styles";

export const Header = () => {
  const { setOpenModal } = UseOpenModal();
  return (
    <StyledHeader>
      <nav className="container">
        <span>LH</span>
        <ul>
          <a href="#about">Sobre</a>
          <a href="#techs">Tecnologias</a>
          <a href="#projects">Projetos</a>
        </ul>
        <HiMenu className="menu" onClick={() => setOpenModal(true)} />
      </nav>
    </StyledHeader>
  );
};
