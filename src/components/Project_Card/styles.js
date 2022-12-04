import styled from "styled-components";

export const StyledProjectCard = styled.div`
  width: 100%;
  position: relative;
  padding-top: 85%;
  background-image: url(${(props) => props.image});
  background-size: 100% 100%;
  margin: 0 5px;
  border-radius: 6px;

  img {
    display: none;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 5vw 15px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient(
      180deg,
      rgba(6, 8, 15, 0.85) 100%,
      #000000 100%
    );
  }

  .content > h3 {
    font-size: min(30px, 4vw);
    display: flex;
    flex-direction: column;
  }
  .content > h3 > span {
    font-size: 2vw;
    color: var(--green1);
  }
  .content > p {
    font-size: min(20px, 2.9vw);
    line-height: 3.5vw;
    color: var(--grey1);
  }
  .content > ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    line-height: 2.5vw;
  }
  .content > ul > li > span {
    font-size: min(15px, 2.2vw);
  }

  .links {
    display: flex;
    gap: 15vw;
    justify-content: center;
  }
  .links > svg {
    font-size: min(30px, 6vw);
    color: var(--grey1);
    cursor: pointer;
    :hover {
      color: var(--green1);
    }
  }

  @media (min-width: 768px) {
    background: none;
    padding-top: 30%;
    margin: 0 20px;
    min-height: 200px;

    img {
      display: flex;
      position: absolute;
      width: 55%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 4px;
    }

    .content {
      padding: 0;
      background: none;
      align-items: flex-end;
      justify-content: space-between;
    }
    .content > h3 {
      font-size: 2vw;
      text-align: center;
    }
    .content > h3 > span {
      font-size: 1vw;
      text-align: end;
    }

    .content > p {
      width: 40vw;
      background-color: #1d2d44;
      border-radius: 4px;
      margin: 0;
      padding: 10px;
      font-size: min(18px, 1.2vw);
      line-height: 1.5vw;
      text-align: end;
      color: var(--grey1);
    }

    .content > ul {
      width: 25vw;
      justify-content: flex-end;
      line-height: 1.5vw;
    }
    .content > ul > li > span {
      font-size: 1vw;
      color: var(--grey1);
    }

    .links {
      gap: 5vw;
    }
  }
`;
