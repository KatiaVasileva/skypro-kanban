import { Navigate, Outlet } from "react-router-dom";
// import MainPage from "../pages/MainPage";
import PropTypes from "prop-types";
import { AppRoutes } from "../lib/appRoutes";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
