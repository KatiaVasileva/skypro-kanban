import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./lib/appRoutes";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import CardBrowsePage from "./pages/CardBrowsePage";

function App() {
  const isAuth = true;

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={AppRoutes.MAIN}>
            <Route path={AppRoutes.CARD_BROWSE} element={<CardBrowsePage />} />
          </Route>
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
