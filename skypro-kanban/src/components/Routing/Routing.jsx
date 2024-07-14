import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { AppRoutes } from "../../lib/appRoutes";
import CardBrowsePage from "../../pages/CardBrowsePage";
import ExitPage from "../../pages/ExitPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import MainPage from "../../pages/MainPage";
import NewCardPage from "../../pages/NewCardPage";

// eslint-disable-next-line react/prop-types
export default function Routing({ toggleTheme }) {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={AppRoutes.MAIN} element={<MainPage toggleTheme={toggleTheme}/>}>
            <Route path={AppRoutes.NEW_CARD} element={<NewCardPage />} />
            <Route path={AppRoutes.CARD_BROWSE} element={<CardBrowsePage />} />
            <Route path={AppRoutes.EXIT} element={<ExitPage />} />
          </Route>
        </Route>

        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
