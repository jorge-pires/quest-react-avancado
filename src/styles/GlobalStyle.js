import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        font-family: 'Press Start 2P', system-ui;
    }

    a{
        text-decoration: none;
        color: black;
    }

    ul{
        list-style: none;
    }
`