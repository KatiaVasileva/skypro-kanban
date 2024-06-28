import { useParams } from "react-router-dom";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import { deleteTask } from "../api";
import PropTypes from "prop-types";

export default function CardBrowsePage(setTasks) {
  let { id } = useParams();

  const handleDeleteButton = async () => {
    const newTasks = await deleteTask(id);
    setTasks(newTasks.tasks);
  }

  return <PopBrowse cardId={id} onClick={handleDeleteButton}/>;
}

CardBrowsePage.propTypes = {
  setTasks: PropTypes.func.isRequired
}
