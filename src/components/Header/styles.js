import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  background-color: #00111c;
  box-shadow: 0px 10px 12px -10px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  z-index: 1;

  img {
    width: 50px;
  }

  .menu {
    font-size: 35px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav > ul {
    display: none;
  }

  nav > ul > a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    :hover {
      color: var(--verde2);
    }
  }

  @media screen and (min-width: 768px) {
    .menu {
      display: none;
    }

    nav > ul {
      width: 20rem;
      display: flex;
      justify-content: space-between;
    }
    nav > ul > li > a {
      text-decoration: none;
      color: var(--whiteFixed);
      :hover {
        color: var(--green1);
      }
    }
  }
`;
