import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './theme';
import Router from './routes/Router';
import { RecoilRoot } from 'recoil';
const GlobalStyle = createGlobalStyle`
  ${reset};
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing:border-box;
  }
  

`;
function App() {
  return (
    <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
    </RecoilRoot>
    );
}

export default App;
