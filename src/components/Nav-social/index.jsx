import { StyledSocial } from "./style";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

export const NavSocial = () => {
  return (
    <StyledSocial>
      <ul>
        <li>
          <BsGithub />
        </li>
        <li>
          <FiLinkedin />
        </li>
      </ul>
    </StyledSocial>
  );
};
