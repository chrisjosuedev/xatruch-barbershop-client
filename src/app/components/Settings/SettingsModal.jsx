import { useEffect } from "react";
import Modal from "react-modal"
import Swal from "sweetalert2";

import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale";

import { Controller, useForm } from "react-hook-form";
import { differenceInSeconds, format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faFloppyDisk, faWrench } from "@fortawesome/free-solid-svg-icons";

import { useUiStore } from "../../../hooks/useUiStore";
import { customStyles } from "../../../helpers/ModalCustomStyles";

import { alertSuccess, roundHour } from "../../../helpers";

import 'react-datepicker/dist/react-datepicker.min.css';
import { useSettingStore } from "../../../hooks/useSettingStore";

Modal.setAppElement('#root');

/** ES DatePicker */
registerLocale('es', es);

export const SettingsModal = () => {

  const { control, handleSubmit, reset, clearErrors, setError, formState: { errors } } = useForm();
  const { isModalOpen, startCloseModal } = useUiStore();
  const { startSavingSetting, activeSetting } = useSettingStore();

  useEffect(() => {
    if (activeSetting !== null) {
      reset(activeSetting);
    }
  }, [activeSetting]);

  const closeModalAndClean = () => {
    reset();
    clearErrors();
    startCloseModal();
  }

  const onSubmit = (data) => {
    const { startDailyAvailability, endDailyAvailability, ...rest } = data;
    const difference = differenceInSeconds(endDailyAvailability, startDailyAvailability);

    if (isNaN(difference) || difference <= 0) {
      setError("endDailyAvailability", {
        type: "custom",
      });
      const infoMessage = alertSuccess("Fecha de Fin no puede ser menor que la de Inicio.", "error");
      Swal.fire(infoMessage);
      return;
    }

    startSavingSetting({
      ...rest,
      startDailyAvailability: format(startDailyAvailability, "HH:mm:ss"),
      endDailyAvailability: format(endDailyAvailability, "HH:mm:ss")
    }).then(() => {
      const infoMessage = alertSuccess("Configuración creada.", "success");
      Swal.fire(infoMessage);
    })
    closeModalAndClean();
  }

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      isOpen={isModalOpen}
      onRequestClose={closeModalAndClean}
      style={customStyles}
    >
      <div className="container">
        <div className="modal-header">
          <h5 className="modal-title">
            <FontAwesomeIcon icon={faWrench} />
            &nbsp;HORARIOS
          </h5>
          <button
            type="button"
            onClick={closeModalAndClean}
            className="close"
            aria-label="Close">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <label className="mr-2" htmlFor="end">Hora Inicio: </label>
              <div className="col-md-12 mb-2 customDatePickerWidth">
                <Controller
                  control={control}
                  name="startDailyAvailability"
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <DatePicker
                      {...field}
                      inputRef={ref}
                      className={`form-control ${errors.startDailyAvailability ? 'is-invalid' : ''}`}
                      selected={field.value}
                      onChange={date => field.onChange(date)}
                      locale='es'
                      timeCaption="Horario"
                      timeIntervals={60}
                      dateFormat="h:mm a"
                      placeholderText='Seleccionar Inicio'
                      showTimeSelectOnly
                      showTimeSelect
                      onKeyDown={(e) => {
                        e.preventDefault();
                      }}
                    />
                  )}
                />
              </div>
              <label className="mr-2 mt-4" htmlFor="end">Hora de Fin: </label>
              <div className="col-md-12 customDatePickerWidth">
                <Controller
                  control={control}
                  name="endDailyAvailability"
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <DatePicker
                      {...field}
                      inputRef={ref}
                      className={`form-control ${errors.endDailyAvailability ? 'is-invalid' : ''}`}
                      selected={field.value}
                      onChange={date => field.onChange(date)}
                      locale='es'
                      timeCaption="Horario"
                      timeIntervals={60}
                      dateFormat="h:mm a"
                      placeholderText='Seleccionar Fin'
                      showTimeSelectOnly
                      showTimeSelect
                      onKeyDown={(e) => {
                        e.preventDefault();
                      }}
                    />
                  )}
                />
              </div>
            </div>
            <button className="btn btn-dark float-right m-4" type="submit">
              <FontAwesomeIcon icon={faFloppyDisk} /> Guardar
            </button>
          </form>
        </div>
      </div>
    </Modal>
  )
}
