import { useParams } from "react-router-dom";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

export default function CardBrowsePage() {
  let { id } = useParams();

  return <PopBrowse cardId={id} />;
}
