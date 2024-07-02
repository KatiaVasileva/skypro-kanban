import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { AppRoutes } from "../../lib/appRoutes";
import CardBrowsePage from "../../pages/CardBrowsePage";
import ExitPage from "../../pages/ExitPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage";
import MainPage from "../../pages/MainPage";
import { useState } from "react";

export default function Routing() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <>
        <Routes>
          <Route element={<PrivateRoute isAuth={isAuth} />}>
            <Route path={AppRoutes.MAIN}  element={<MainPage />} >
              <Route path={AppRoutes.CARD_BROWSE} element={<CardBrowsePage />} />
              <Route path={AppRoutes.EXIT} element={<ExitPage setIsAuth={setIsAuth}/>} />
            </Route>
          </Route>
  
          <Route path={AppRoutes.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
          <Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
          <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </>
    );
}