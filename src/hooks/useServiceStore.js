import { useDispatch, useSelector } from "react-redux";

import { getAllServices } from "../api";
import { onLoadServices, onSetIsLoading, onFilterServices, onResetFilter } from "../store";

export const useServiceStore = () => {
  const dispatch = useDispatch();

  const { services, isLoadingServices } = useSelector((state) => state.service);

  const startSetIsLoading = () => {
    dispatch(dispatch(onSetIsLoading()));
  }


  const startLoadingServices = async () => {
    const { data: services } = await getAllServices();
    dispatch(onLoadServices(services));
  };

  const startFilteringServices = (serviceName = "") => {
    dispatch(onFilterServices(serviceName));

    /* Set Loading to False */
    dispatch(dispatch(onSetIsLoading()));
  };

  const startFilteringReset = () => {
    dispatch(onResetFilter());

    /* Set Loading to False */
    dispatch(dispatch(onSetIsLoading()));
  }

  return {
    // props
    services,
    isLoadingServices,

    // methods
    startLoadingServices,
    startFilteringServices,
    startFilteringReset,
    startSetIsLoading
  };
};
