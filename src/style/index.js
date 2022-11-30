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
  --brand1: #00111c
  --verde1: #63E8DF;
  --verde2: #17b794;
	--cinza1: #252f3e;
	--cinza2:  #293342;
	--cinza3: #6a717b;
}

body{
  font-family: "Inter", sans-serif;
}


.App{
  min-height: 100vh;
  color: #FFFFFF;
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
