import { useState, useEffect } from "react";
import { ErrorMessage, Wrapper } from "../styles/Common.styled";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import Main from "../components/Main/Main";
import { Outlet } from "react-router-dom";
import { getTasks } from "../api";
import { useUserContext } from "../hooks/useUserContext";
import { useTaskContext } from "../hooks/useTaskContext";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [getTasksError, setGetTasksError] = useState(false);
  const { user } = useUserContext();
  const { setTasks } = useTaskContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getTasks({ token: user.token })
      .then((tasks) => {
        setIsLoading(false);
        setTasks(tasks.tasks);
      })
      .catch(() => {
        setGetTasksError("Не удалось загрузить данные, попробуйте позже.");
      });
  }, [user.token, setTasks]);

  return (
    <>
      <Wrapper>
        <Header />

        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            {getTasksError && <ErrorMessage>{getTasksError}</ErrorMessage>}
            {!getTasksError && (
              <>
                <Main></Main>
                <Outlet />
              </>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
}
