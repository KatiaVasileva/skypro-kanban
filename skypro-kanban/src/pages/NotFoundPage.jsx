import { Wrapper } from "../styles/Common.styled";
import { GlobalStyle } from "../styles/Global.styled";
import NotFound from "../components/NotFound/NotFound";

export default function NotFoundPage() {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <NotFound />
    </Wrapper>
    </>
  );
}
