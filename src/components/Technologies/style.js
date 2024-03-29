import styled from "styled-components";

export const StyledTechs = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--green1);
    margin-bottom: 30px;
    padding-bottom: 15px;
    padding-top: 80px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
