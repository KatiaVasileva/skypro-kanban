import Register from "../components/Register/Register";
import { Wrapper } from "../styles/Common.styled";
import { GlobalStyle } from "../styles/Global.styled";

export default function RegisterPage() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Register />
      </Wrapper>
    </>
  );
}