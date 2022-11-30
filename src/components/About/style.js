import styled from "styled-components";

export const StyledAbout = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;

  h2 {
    font-size: max(30px, 2.2vw);
    border-bottom: 1px solid var(--verde2);
    margin-bottom: 60px;
    padding-bottom: 15px;
    padding-top: 100px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .content > .text {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .content > img {
    margin: 0 auto;
    width: min(250px, 50vw);
    border-radius: 4px;
    box-shadow: 2px 2px 2px 0px var(--verde2),
      inset 50px -50px 50px -30px rgba(255, 0, 0, 0);
  }

  @media (min-width: 768px) {
    min-height: 100vh;
    position: relative;

    .content > .text {
      width: 60%;
    }

    .content > p {
      font-size: max(18px, 1.1vw);
      position: absolute;
      width: 50%;
      left: 12.08px;
    }
    .content > img {
      width: min(40%, 300px);
      position: absolute;
      right: 12.08px;
    }
  }
`;
