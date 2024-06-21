import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin:0px;
        padding:0px;
        font-family: "Quicksand", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

html{
    font-size:80%;
}

    body{
        background-color:var(--color-bg-light)
    }
`;

export default GlobalStyles;
