import { StyledFooter } from "./styles";
import { BsGithub, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <StyledFooter className="container medium">
      <AiOutlineMail />
      {/* <BsFillTelephoneFill /> */}
      <BsGithub />
      <FiLinkedin />
    </StyledFooter>
  );
};
