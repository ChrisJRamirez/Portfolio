import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  GlobalStyle } from "./genStyles/GlobalStyles"
import { Theme } from "./genStyles/themes"

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
       
        <main>

        </main>  
    </ThemeProvider>
  );
}

export default App;
