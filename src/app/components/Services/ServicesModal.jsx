import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFloppyDisk,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

import { useUiStore } from "../../../hooks/useUiStore";
import { customStyles } from "../../../helpers/ModalCustomStyles";

import {
  alertSuccess,
  priceValidations,
  serviceNameValidations,
} from "../../../helpers";
import { useServiceStore } from "../../../hooks/useServiceStore";

Modal.setAppElement("#root");

const initForm = {
  serviceName: "",
  price: 0,
};

export const ServicesModal = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initForm });

  const { isModalOpen, startCloseModal } = useUiStore();
  const { message, activeService, serviceErrors, startSavingService } =
    useServiceStore();

  const closeModalAndClean = () => {
    reset();
    clearErrors();
    startCloseModal();
  };

  useEffect(() => {
    if (activeService !== null) reset(activeService);
  }, [activeService]);

  useEffect(() => {
    if (message !== undefined) {
      const successInfo = alertSuccess(message, "success");
      Swal.fire(successInfo);
    }
  }, [message]);

  useEffect(() => {
    if (serviceErrors && serviceErrors.length > 0) {
      for (const error of serviceErrors) {
        setError(error.field, {
          type: "server",
          message: error.message,
        });
      }
    }
  }, [serviceErrors]);

  const onSubmit = async (data) => {
    startSavingService(data).then(() => {
      reset();
      startCloseModal();
    });
  };

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      isOpen={isModalOpen}
      onRequestClose={closeModalAndClean}
      style={customStyles}
    >
      <div>
        <div className="modal-header">
          <h5 className="modal-title">
            <FontAwesomeIcon icon={faTag} />
            &nbsp;SERVICIOS
          </h5>
          <button
            type="button"
            onClick={closeModalAndClean}
            className="close"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4">
              <label htmlFor="serviceName" className="form-label">
                Nombre del Servicio{" "}
              </label>
              <input
                type="text"
                className={`form-control ${errors.serviceName ? "is-invalid" : ""}`}
                id="serviceName"
                placeholder="Corte de cabello..."
                {...register("serviceName", serviceNameValidations)}
                autoFocus
              />
              <small className="invalid-feedback text-left">
                {errors.serviceName && errors.serviceName.message}
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="form-label">
                Precio del Servicio{" "}
              </label>
              <input
                type="text"
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                id="price"
                placeholder="Corte de cabello..."
                {...register("price", priceValidations)}
              />
              <small className="invalid-feedback text-left">
                {errors.price && errors.price.message}
              </small>
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
