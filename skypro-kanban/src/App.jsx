// import { useState } from "react";
import Routing from "./components/Routing/Routing";
import TaskProvider from "./contexts/TaskContext";
// import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import { darkTheme, lightTheme } from "./lib/themes";
import { GlobalStyle } from "./styles/Global.styled";
import "react-day-picker/dist/style.css";
import { ThemeProvider } from "styled-components";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  console.log(theme);

  return (
    <>
      <UserProvider>
        <TaskProvider>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
              <Routing />
              <GlobalStyle />
            </ThemeProvider>
        </TaskProvider>
      </UserProvider>
    </>
  );
}

export default App;
