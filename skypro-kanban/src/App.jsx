import "./App.css";
import Routing from "./components/Routing/Routing";
import TaskProvider from "./contexts/TaskContext";
import UserProvider from "./contexts/UserContext";
import { GlobalStyle } from "./styles/Global.styled";
import "react-day-picker/dist/style.css";

function App() {
  return (
    <>
      <UserProvider>
        <TaskProvider>
          <Routing />
          <GlobalStyle />
        </TaskProvider>
      </UserProvider>
    </>
  );
}

export default App;
