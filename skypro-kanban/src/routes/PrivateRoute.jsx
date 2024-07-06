import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../lib/appRoutes";
import { useUserContext } from "../hooks/useUserContext";

function PrivateRoute() {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}

export default PrivateRoute;
