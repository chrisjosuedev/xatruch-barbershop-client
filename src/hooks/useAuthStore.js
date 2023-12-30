import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout, onSetAuthErrors } from "../store";
import { renewToken, signUp, singIn } from "../api";

export const useAuthStore = () => {
  const { user, currentStatus, message, errors } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const startLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout(message));

    // If token exists...
    localStorage.removeItem("token");
    dispatch(onLogout());
  };

  // Login User
  const startLogin = async ({ email, password }) => {
    try {
      const { user, message } = await singIn(email, password);
      const { token, ...profile } = user;
      localStorage.setItem("token", token);
      dispatch(onLogin({ profile, message }));
    } catch (error) {
      const {
        response: {
          data: { message, errors },
        },
      } = error;
      dispatch(onSetAuthErrors({ message, errors }));
      throw new Error(error);
    }
  };

  // Register User
  const startRegister = async ({ fullName, email, password }) => {
    try {
      const { user, message } = await signUp(fullName, email, password);
      const { token, ...profile } = user;
      localStorage.setItem("token", token);
      dispatch(onLogin({ profile, message }));
    } catch (error) {
      const {
        response: {
          data: { message, errors },
        },
      } = error;
      console.log(errors);
      dispatch(onSetAuthErrors({ message, errors }));
      throw new Error(error);
    }
  };

  // Check Token and Refresing Session
  const startCheckingToken = async () => {
    dispatch(onChecking());
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());
    try {
      const { user } = await renewToken(token);
      const { token: newToken, ...profile } = user;

      localStorage.setItem("token", newToken);

      dispatch(onLogin({ profile }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  return {
    // props
    user,
    currentStatus,
    message,
    errors,

    // methods
    startCheckingToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
