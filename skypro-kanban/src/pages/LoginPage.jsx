import Login from "../components/Login/Login";
import { Wrapper } from "../styles/Common.styled";
import { GlobalStyle } from "../styles/Global.styled";

export default function LoginPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Login />
      </Wrapper>
    </>
  );
}
