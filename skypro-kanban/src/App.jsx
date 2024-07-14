import { useState } from "react";
import Routing from "./components/Routing/Routing";
import TaskProvider from "./contexts/TaskContext";
// import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";
import { darkTheme, lightTheme } from "./lib/themes";
import { GlobalStyle } from "./styles/Global.styled";
import "react-day-picker/dist/style.css";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <UserProvider>
        <TaskProvider>
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Routing toggleTheme={toggleTheme}/>
            <GlobalStyle />
          </ThemeProvider>
        </TaskProvider>
      </UserProvider>
    </>
  );
}

export default App;
