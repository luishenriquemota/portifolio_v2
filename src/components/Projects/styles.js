import styled from "styled-components";

export const StyledProjects = styled.section`
  min-height: calc(100vh + 100px);

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--verde2);
    margin-bottom: 60px;
    padding-top: 100px;
  }

  @media (min-width: 768px) {
    .teste {
      min-height: 100%;
    }
  }
`;
