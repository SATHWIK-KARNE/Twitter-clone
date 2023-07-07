import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed  from "./Feed";
import Widgets from "./Widgets";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./Theme.js";


const Container = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  /* max-width: 1300px; */
  /* to center=>ml and mr=auto */
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    
    <Container>

      
      {/* there are 3 components=>sidebar, middle(scrollable) and right-side.make three files for each */}

      <Sidebar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Feed />
      <Widgets />
      
    </Container>
    
    </ThemeProvider>
  );
}

export default App;
