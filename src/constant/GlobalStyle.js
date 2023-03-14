import { createGlobalStyle } from "styled-components";

const GlobalStyle =createGlobalStyle`
    #root {
        width: 100%;
        min-height: 100vh;
        font-family: "Lexend Deca";
        
        > div {
            width: 100%;
            min-height: 100vh;
        }
    }

    

`;

export default GlobalStyle