import styled from "styled-components";

export const StyledCardTech = styled.div`
  width: min(5rem, 20vw);
  height: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  border-radius: 15px;
  background-image: linear-gradient(
    148deg,
    #1d2d44 50%,
    #f0ebd8 50%,
    #1d2d44 50%
  );

  img {
    width: 40px;
  }

  h3 {
    font-size: 10px;
  }
`;
