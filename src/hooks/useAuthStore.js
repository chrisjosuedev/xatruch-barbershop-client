import { useDispatch, useSelector } from "react-redux";
import {
  onChecking,
  onClearAuthMessages,
  onLogin,
  onLogout,
  onLogoutBarbers,
  onLogoutReviews,
  onLogoutSettings,
  onLogoutUserBookings,
  onSetAuthErrors,
  onSetLoadingProfileImage,
  onUpdateProfileImage,
  onUpdateUser,
} from "../store";
import { fileUpload, renewToken, signUp, singIn, updateUser } from "../api";

export const useAuthStore = () => {
  const { user, isLoadingPicture, currentStatus, message, errors } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Logout
  const startLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout(message));

    // If token exists...
    localStorage.removeItem("token");

    // Clean States...
    // Reviews
    dispatch(onLogoutReviews());
    // Bookings
    dispatch(onLogoutUserBookings());
    // Settings
    dispatch(onLogoutSettings());
    // Barbers
    dispatch(onLogoutBarbers());

    // Logout the App
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
      setTimeout(() => {
        dispatch(onClearAuthMessages());
      }, 1000);
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
      dispatch(onSetAuthErrors({ message, errors }));
      setTimeout(() => {
        dispatch(onClearAuthMessages());
      }, 1000);
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

  // Update Profile Url User
  const startUploadingProfilePicture = async (file) => {
    dispatch(onSetLoadingProfileImage(true));
    try {
      const { profileUrl } = await fileUpload(file);
      dispatch(onUpdateProfileImage(profileUrl));
    } catch (error) {
      dispatch(onSetLoadingProfileImage(false));
      const {
        response: {
          data: { message, errors },
        },
      } = error;
      dispatch(onSetAuthErrors({ message, errors }));
      setTimeout(() => {
        dispatch(onClearAuthMessages());
      }, 5000);
      throw new Error(error);
    }
  };

  // Update Profile Data
  const startUpdateAuthProfile = async ({ fullName, email }) => {
    try {
      const { token, ...profile } = await updateUser(fullName, email);

      // if token, user updated email
      if (token) localStorage.setItem("token", token);

      dispatch(onUpdateUser(profile));
    } catch (error) {
      const {
        response: {
          data: { message, errors },
        },
      } = error;
      dispatch(onSetAuthErrors({ message, errors }));
      setTimeout(() => {
        dispatch(onClearAuthMessages());
      }, 3000);
      throw new Error(error);
    }
  };

  return {
    // props
    user,
    currentStatus,
    message,
    errors,
    isLoadingPicture,

    // methods
    startCheckingToken,
    startLogin,
    startLogout,
    startRegister,
    startUploadingProfilePicture,
    startUpdateAuthProfile,
  };
};
