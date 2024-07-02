import Login from "../components/Login/Login";
import { Wrapper } from "../styles/Common.styled";
import PropTypes from "prop-types";

export default function LoginPage({ setIsAuth }) {
  return (
    <>
      <Wrapper>
        <Login setIsAuth={setIsAuth} />
      </Wrapper>
    </>
  );
}

LoginPage.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};
