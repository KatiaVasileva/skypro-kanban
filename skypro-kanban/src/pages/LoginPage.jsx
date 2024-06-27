import Login from "../components/Login/Login";
import { Wrapper } from "../styles/Common.styled";
import PropTypes from "prop-types";

export default function LoginPage({ onClick }) {
  return (
    <>
      <Wrapper>
        <Login onClick={onClick} />
      </Wrapper>
    </>
  );
}

LoginPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};
