import "./App.css";
import Routing from "./components/Routing/Routing";
import UserProvider from "./contexts/UserContext";
import { GlobalStyle } from "./styles/Global.styled";
import "react-day-picker/dist/style.css";

function App() {
  return (
    <>
      <UserProvider>
        <Routing />
        <GlobalStyle />
      </UserProvider>
    </>
  );
}

export default App;
