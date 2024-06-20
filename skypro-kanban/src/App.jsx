import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { AppRoutes } from "./lib/appRoutes";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const isAuth = false;

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={AppRoutes.MAIN} element={<MainPage />} />
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
