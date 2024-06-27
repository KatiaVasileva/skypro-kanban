import { useParams } from "react-router-dom";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

export default function CardBrowsePage() {
  let { id } = useParams();
  console.log(id);

  return <PopBrowse cardId={id} />;
}
