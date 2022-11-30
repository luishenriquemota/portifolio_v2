import styled from "styled-components";

export const StyledTechs = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--verde2);
    margin-bottom: 60px;
    padding-bottom: 15px;
    margin-bottom: 100px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
