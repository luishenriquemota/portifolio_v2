import styled from "styled-components";

export const StyledProjects = styled.section`
  min-height: calc(100vh - 50px);
  position: relative;

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--green1);
    margin-bottom: 30px;
    padding-bottom: 15px;
    padding-top: 80px;
  }

  .rec.rec-arrow {
    visibility: hidden;
  }

  .rec.rec-dot {
    border: 2px solid #ffffff;
  }

  .rec-dot_active {
    background-color: var(--green1);
    box-shadow: 0 0 1px 3px var(--green1);
  }

  @media (min-width: 768px) {
    .rec.rec-arrow {
      visibility: visible;
      :hover {
        background-color: var(--grey1);
      }
    }
  }
`;
