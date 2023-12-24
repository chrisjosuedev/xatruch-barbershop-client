import { useDispatch, useSelector } from "react-redux";
import { xatruchBarberApi } from "../api";

import { onLoadServices } from "../store";

export const useServiceStore = () => {
  const { services, isLoadingServices } = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const startLoadingServices = async () => {
    const { data } = await xatruchBarberApi.get("/services");
    dispatch(onLoadServices(data.data));
  };

  return {
    // properties
    services,
    isLoadingServices,

    // methods
    startLoadingServices,
  };
};
