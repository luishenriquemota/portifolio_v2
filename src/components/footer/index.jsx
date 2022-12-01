import { StyledFooter } from "./styles";
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <StyledFooter id="contact">
      <h3>Contato</h3>
      <div className="container">
        <AiOutlineMail
          onClick={() => window.open("mailto:luishenriquemota21@gmail.com")}
        />
        <BsGithub
          onClick={() =>
            window.open("https://github.com/luishenriquemota", "_blank")
          }
        />
        <FiLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/luis-henrique-mota/",
              "_blank"
            )
          }
        />
      </div>
    </StyledFooter>
  );
};
