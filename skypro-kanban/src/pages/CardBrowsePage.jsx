import { useParams } from "react-router-dom";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import { Wrapper } from "../styles/Common.styled";

export default function CardBrowsePage() {
    let { id } = useParams();
    console.log(id);

  return (
    <>
      <Wrapper>
        <PopBrowse cardId={id}/>
      </Wrapper>
    </>
  );
}

