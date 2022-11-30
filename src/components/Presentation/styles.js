import styled from "styled-components";

export const StyledPresentation = styled.section`
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 40px;

  h1 {
    font-size: min(60px, 4.8vw);
  }

  p:first-of-type {
    font-size: min(30px, 3.2vw);
    color: var(--verde2);
    font-weight: bold;
  }
  p {
    font-size: min(22px, 3.2vw);
    line-height: 24px;
    margin-top: 10px;
    color: #9ca3af;
  }

  button {
    width: 50%;
    height: 30px;
    font-weight: 600;
    background-color: transparent;
    color: var(--verde2);
    border: 1px solid var(--verde2);
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;

    :hover {
      background-color: var(--verde2);
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    min-height: calc(100vh + 60px);

    p {
      width: min(90%, 850px);
    }

    button {
      width: 40%;
      font-size: 15px;
    }
  }
`;
