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
    138deg,
    #000000 0%,
    #262626 52%,
    #000000 90%
  );

  img {
    width: 40px;
  }

  h3 {
    font-size: 10px;
  }
`;
