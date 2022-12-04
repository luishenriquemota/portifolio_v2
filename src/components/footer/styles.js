import styled from "styled-components";

export const StyledFooter = styled.footer`
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  position: relative;

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 50px;
  }

  div > svg {
    font-size: 25px;
    cursor: pointer;
    :hover {
      color: var(--green1);
    }
  }
`;
