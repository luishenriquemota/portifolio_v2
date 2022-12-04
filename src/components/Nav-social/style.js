import styled from "styled-components";

export const StyledSocial = styled.nav`
  position: fixed;
  bottom: 0;
  margin-left: 3vw;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    ::after {
      content: "";
      width: 1px;
      height: 100px;
      background-color: var(--grey1);
    }
  }

  ul > li > svg {
    font-size: min(25px, 3.6vw);
    cursor: pointer;
    color: var(--grey1);
    :hover {
      color: var(--green1);
      transform: scale(1.1);
    }
  }
`;
