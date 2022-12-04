import styled from "styled-components";

export const StyledPresentation = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-size: min(60px, 4.8vw);
    color: var(--whiteFixed);
  }

  p:first-of-type {
    margin: 0;
    font-size: min(30px, 3.2vw);
    color: var(--green1);
    font-weight: bold;
  }
  p {
    font-size: min(22px, 3.2vw);
    line-height: 24px;
    margin-top: 10px;
    color: var(--grey1);
  }

  a {
    width: 50%;
    padding: 5px;
    margin-top: 15px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border: 1px solid var(--green1);
    border-radius: 4px;
    color: var(--green1);
    cursor: pointer;
    :hover {
      background-color: var(--green1);
      color: #ffffff;
    }
  }

  @media (min-width: 768px) {
    min-height: calc(100vh + 60px);

    p {
      line-height: 30px;
      width: min(90%, 850px);
    }

    a {
      width: 40%;
      font-size: 15px;
    }
  }
`;
