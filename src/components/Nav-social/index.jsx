import { StyledSocial } from "./style";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export const NavSocial = () => {
  return (
    <StyledSocial>
      <ul>
        <li>
          <AiOutlineMail
            onClick={() => window.open("mailto:luishenriquemota21@gmail.com")}
          />
        </li>
        <li>
          <BsGithub
            onClick={() =>
              window.open("https://github.com/luishenriquemota", "_blank")
            }
          />
        </li>
        <li>
          <FiLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/luis-henrique-mota/",
                "_blank"
              )
            }
          />
        </li>
      </ul>
    </StyledSocial>
  );
};
