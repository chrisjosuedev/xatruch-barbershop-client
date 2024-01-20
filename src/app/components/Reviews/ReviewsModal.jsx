import Modal from "react-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faFloppyDisk,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";

import { useUiStore } from "../../../hooks/useUiStore";
import { customStyles } from "../../../helpers/ModalCustomStyles";
import { useForm } from "react-hook-form";
import {
  reviewValidations,
  titleValidations,
} from "../../../helpers/formValidations";
import { useReviewStore } from "../../../hooks/useReviewStore";
import { alertSuccess } from "../../../helpers";
import { useEffect } from "react";

Modal.setAppElement("#root");

const initForm = {
  title: "",
  review: "",
};

export const ReviewsModal = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initForm });

  const { startSavingReview, message, activeReview } = useReviewStore();
  const { isModalOpen, startCloseModal } = useUiStore();

  const closeModalAndClean = () => {
    reset();
    clearErrors();
    startCloseModal();
  };

  // Message when action Finished
  useEffect(() => {
    if (message !== undefined) {
      const successInfo = alertSuccess(message, "success");
      Swal.fire(successInfo);
    }
  }, [message]);

  useEffect(() => {
    if (activeReview !== null) reset(activeReview);
  }, [activeReview]);

  const onSubmit = async (data) => {
    try {
      await startSavingReview(data);
      reset();
      startCloseModal();
    } catch (error) {
      const {
        response: {
          data: { message },
        },
      } = error;
      const errorInfo = alertSuccess(message, "error");
      Swal.fire(errorInfo);
    }
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
            <FontAwesomeIcon icon={faList} />
            &nbsp;REVIEWS
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="title" className="form-label">
                Título{" "}
              </label>
              <input
                type="text"
                className={`form-control ${errors.title ? "is-invalid" : ""}`}
                id="title"
                placeholder="Experiencia en Servicio..."
                {...register("title", titleValidations)}
                autoFocus
              />
              <small className="invalid-feedback text-left">
                {errors.title && errors.title.message}
              </small>
            </div>

            <div className="mb-2">
              <label htmlFor="review" className="form-label">
                ¿Qué opinas de la barbería?{" "}
              </label>
              <textarea
                className={`form-control ${errors.review ? "is-invalid" : ""}`}
                id="review"
                rows="3"
                placeholder="Excelente servicio..."
                {...register("review", reviewValidations)}
              ></textarea>
              <small className="invalid-feedback text-left">
                {errors.review && errors.review.message}
              </small>
            </div>
            <button type="submit" className="btn btn-dark mt-2">
              <FontAwesomeIcon icon={faFloppyDisk} /> Publicar
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
