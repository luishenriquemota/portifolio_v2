import styled from "styled-components";

export const StyledProjects = styled.section`
  /* min-height: calc(100vh - 100px); */
  min-height: 100vh;
  position: relative;

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--green1);
    margin-bottom: 30px;
    padding-bottom: 15px;
    padding-top: 80px;
  }

  @media (min-width: 768px) {
    .carousel {
    }
  }
`;
