import styled from "styled-components";

export const StyledSocial = styled.nav`
  position: fixed;
  /* position: absolute; */
  /* z-index: -1; */
  margin-top: 650px;
  padding-left: 30px;
  /* display: flex; */
  /* flex-direction: column; */
  /* position: fixed; */

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    ::after {
      content: "";
      width: 1px;
      height: 150px;
      background-color: red;
    }
  }

  ul > li {
    font-size: 20px;
    :hover {
      /* font-size: 21px; */
      padding-bottom: 2px;
      color: var(--verde1);
    }
  }

  div {
    width: 1px;
    height: 90px;
    background-color: red;
  }
`;
