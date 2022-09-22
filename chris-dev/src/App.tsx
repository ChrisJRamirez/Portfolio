import React from 'react';
import { ThemeProvider } from 'styled-components';
import {  GlobalStyle } from "./genStyles/GlobalStyles";
import { Theme } from "./genStyles/themes";
import {Header, Footer} from "./components";

function App() {
  return (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header/>
        
       
        <main>

        </main> 
        <Footer/> 
    </ThemeProvider>
  );
}

export default App;
