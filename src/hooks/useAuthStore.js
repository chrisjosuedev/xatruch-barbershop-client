import { useDispatch, useSelector } from "react-redux";
import { onChecking, onLogin, onLogout } from "../store";
import { renewToken, singIn } from "../api";

export const useAuthStore = () => {
  const { user, currentStatus, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Login User
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { user, message } = await singIn(email, password);
      const { token, ...profile } = user;
      localStorage.setItem("token", token);
      dispatch(onLogin({ profile, message }));
    } catch (error) {
      console.log(error);
      // TODO: Get error from request.
      dispatch(onLogout("Error al iniciar sesión..."));
    }
  };

  // Check Token and Refresing Session
  const startCheckingToken = async () => {
    const token = localStorage.getItem("token");
    if (!token)
      return dispatch(onLogout("Error al renovar sesión, inice nuevamente."));
    try {
      const { user } = await renewToken(token);
      const { token: newToken, ...profile } = user;

      localStorage.setItem("token", newToken);

      dispatch(onLogin({ profile }));
    } catch (error) {
      // TODO: Handle Error
      localStorage.clear();
      dispatch(onLogout("Error al renovar sesión, inice nuevamente."));
    }
  };

  return {
    // props
    user,
    currentStatus,
    message,

    // methods
    startCheckingToken,
    startLogin,
  };
};
