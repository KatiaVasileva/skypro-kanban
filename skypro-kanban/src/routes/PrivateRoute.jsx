import { Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import PropTypes from "prop-types";
import { AppRoutes } from "../lib/appRoutes";

function PrivateRoute({ isAuth }) {
  return isAuth ? <MainPage /> : <Navigate to={AppRoutes.LOGIN} />;
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.any.isRequired,
};

export default PrivateRoute;
