import "./App.css";
import Routing from "./components/Routing/Routing";
import UserProvider from "./contexts/UserContext";
import { GlobalStyle } from "./styles/Global.styled";

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
