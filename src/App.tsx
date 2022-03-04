import React from 'react';
import { ThemeProvider } from 'styled-components';
//import dark from './styles/themes/dark';
import light from './styles/themes/light';
import Layout  from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={light}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}

export default App;