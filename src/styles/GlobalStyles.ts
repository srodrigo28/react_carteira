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
`;