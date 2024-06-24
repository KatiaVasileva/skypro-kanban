import PopExit from "../components/popups/PopExit/PopExit";
import PropTypes from "prop-types";

export default function ExitPage({ onClick }) {
  return <PopExit onClick={onClick} />;
}

ExitPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
