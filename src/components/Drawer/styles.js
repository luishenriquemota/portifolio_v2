import styled from "styled-components";

export const StyledMenu = styled.nav`
  min-height: 100%;
  background-color: var(--brand1);
  text-align: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 60px;
  }

  ul > li > a {
    text-decoration: none;
    color: var(--whiteFixed);
    font-size: min(20px, 4.3vw);
    font-weight: bold;
    :hover {
      color: var(--green1);
    }
    ::before {
      content: "< ";
      color: var(--green1);
    }
    ::after {
      content: " >";
      color: var(--green1);
    }
  }
`;
