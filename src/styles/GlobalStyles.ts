import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0; padding: 0; box-sizing: border-box;
    }
    body{
        color: white;
        width: 100vw;
        height: 100vh;
        background-color: red;
    }
    html, body, #root{
        height: 100%;
    }
    *, button, input{
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        font-family: 'Inter', sans-serif;
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }
`;