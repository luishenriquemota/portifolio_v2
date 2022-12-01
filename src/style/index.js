import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
  list-style: none;
}

html{
  scroll-behavior: smooth;
}

:root{
  --whiteFixed: #efefef;
  --brand1: #00111c;
  --green1: #17b794;
	--grey1: #9CA3AF;

}

.App{
  min-height: 100vh;
  color: var(--whiteFixed);
  font-family: 'Poppins', sans-serif;

}

.container{
  width: 100%;
	max-width: 95%;
	margin: 0 auto;
	padding: 0.8rem;
}
.container.medium{
  max-width: 80%;
}

.container.small{
  max-width: 80%;
  @media (min-width: 768px){
    max-width: 70%;
  }
}



`;
