import { useDispatch, useSelector } from "react-redux";

import {
  getAllServices,
  getServiceById,
  saveService,
  updateService,
} from "../api";
import {
  onLoadServices,
  onSetIsLoading,
  onFilterServices,
  onResetFilter,
  onSaveNewService,
} from "../store";
import {
  onClearMessage,
  onSetActiveService,
  onSetServiceErrors,
  onUpdateService,
} from "../store/service/serviceSlice";

export const useServiceStore = () => {
  const dispatch = useDispatch();

  const {
    services,
    allServices,
    activeService,
    isLoadingServices,
    message,
    serviceErrors,
  } = useSelector((state) => state.service);

  // Set it Loading
  const startSetIsLoading = () => {
    dispatch(dispatch(onSetIsLoading()));
  };

  // Start Setting Active Service
  const startSetActiveService = (service) => {
    dispatch(onSetActiveService(service));
  };

  // Start Find Service
  const startFindService = async (id) => {
    const service = await getServiceById(id);
    dispatch(onSetActiveService(service));
  };

  // Start Saving Service
  const startSavingService = async (service) => {
    try {
      if (service.id) {
        // Updating Service...
        const { service: serviceUpdated, message } =
          await updateService(service);
        dispatch(onUpdateService({ serviceUpdated, message }));
        setTimeout(() => {
          dispatch(onClearMessage());
        }, 3000);
        return;
      }

      // Saving Service
      const { service: serviceSaved, message } = await saveService(service);
      dispatch(onSaveNewService({ serviceSaved, message }));
      setTimeout(() => {
        dispatch(onClearMessage());
      }, 3000);
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch(onSetServiceErrors(errors));
      throw new Error(errors);
    }
  };

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
  };

  return {
    // props
    services,
    isLoadingServices,
    message,
    serviceErrors,
    allServices,
    activeService,

    // methods
    startLoadingServices,
    startFilteringServices,
    startFilteringReset,
    startSetIsLoading,
    startSavingService,
    startSetActiveService,
    startFindService,
  };
};
