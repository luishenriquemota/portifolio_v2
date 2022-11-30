import styled from "styled-components";

export const StyledProjectCard = styled.div`
  width: 100%;
  position: relative;
  padding-top: 70%;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  margin: 0 5px;

  img {
    display: none;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, #000000 100%);
    padding: 15px;
    border-radius: 4px;
  }
  .content > h3 {
    font-size: min(30px, 4vw);
  }
  .content > p {
    font-size: min(20px, 2.9vw);
    margin-bottom: 10px;
  }
  .content > ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
  }
  .content > ul > li {
    font-size: min(15px, 2.2vw);
  }

  .links {
    display: flex;
    gap: 50px;
    justify-content: center;
  }
  .links > svg {
    color: red;
    font-size: min(30px, 6vw);
  }

  @media (min-width: 768px) {
    background: none;
    padding-top: 40%;

    img {
      display: flex;
      position: absolute;
      width: 55%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 4px;
      z-index: -1;
    }

    .content {
      padding: 0;
      background: none;
      align-items: flex-end;
      justify-content: space-between;
    }
    .content > h3 {
      font-size: 3vw;
    }

    .content > p {
      font-size: min(18px, 1.2vw);
      /* font-size: 1.2vw; */
      width: 40vw;
      text-align: end;
      background-color: var(--cinza2);
      padding: 10px 25px;
      border-radius: 4px;
    }

    .content > ul {
      width: 40vw;
      justify-content: flex-end;
    }
    .content > ul > li {
      font-size: 0.92vw;
    }
  }
`;
