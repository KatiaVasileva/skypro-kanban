import PopExit from "../components/popups/PopExit/PopExit";
import PropTypes from "prop-types";

export default function ExitPage({ setIsAuth }) {
  return <PopExit setIsAuth={setIsAuth} />;
}

ExitPage.propTypes = {
  setIsAuth: PropTypes.bool.isRequired,
};
