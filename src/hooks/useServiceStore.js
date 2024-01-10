import { useDispatch, useSelector } from "react-redux";

import { getAllServices } from "../api";
import { onLoadServices, onSetIsLoading, onFilterServices, onResetFilter } from "../store";

export const useServiceStore = () => {
  const dispatch = useDispatch();

  const { services, isLoadingServices } = useSelector((state) => state.service);

  // Set it Loading
  const startSetIsLoading = () => {
    dispatch(dispatch(onSetIsLoading()));
  }

  // Start Loading Services
  const startLoadingServices = async () => {
    const { data: services } = await getAllServices();
    dispatch(onLoadServices(services));
  };

  // Filtering Services
  const startFilteringServices = (serviceName = "") => {
    dispatch(onFilterServices(serviceName));

    /* Set Loading to False */
    dispatch(dispatch(onSetIsLoading()));
  };

  // Restore Services
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
