import { useEffect, useMemo, useState } from "react";

import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useServiceStore } from "../../hooks";
import { Message, ServicesGrid, SpinnerLoader } from "../components";

export const ServicesView = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(true);

  const {
    services,
    isLoadingServices,
    startLoadingServices,
    startFilteringServices,
    startSetIsLoading,
    startFilteringReset,
  } = useServiceStore();

  // Control Form
  const { register, handleSubmit, setFocus } = useForm({
    defaultValues: {
      searchText: "",
    },
  });

  // Load Initial Services Data
  useEffect(() => {
    const fetchServices = async () => {
      try {
        await startLoadingServices();
        setSuccess(true);
      } catch (error) {
        const { message } = error;
        startSetIsLoading();
        setMessage(message + " 👻");
        setSuccess(false);
      }
    };
    fetchServices();
    setFocus("searchText");
  }, []);

  // Search Service
  const onSearchSubmit = (data) => {
    const { searchText } = data;
    if (searchText.length === 0) return;

    startFilteringServices(searchText);
  };

  // Restore services when Input Change
  const onChangeSearch = (e) => {
    const searchChange = e.target.value;
    if (!!searchChange || searchChange.length === 0) startFilteringReset();
  };

  // Render Messages or Services
  const renderServices = useMemo(() => {
    if (!success) return <Message message={message} type="danger" />;
    if (services.length === 0) {
      setMessage("Lo sentimos, no encontramos los servicios 😔");
      return <Message message={message} type="dark" />;
    }
    return <ServicesGrid services={services} />;
  }, [success, message, services]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-5">
            <h4>
              {" "}
              <b> Filtrar </b>
            </h4>
            <hr />
            <form onSubmit={handleSubmit(onSearchSubmit)}>
              <div className="form-row">
                <div className="col-md-10 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    {...register("searchText", {
                      onChange: onChangeSearch,
                    })}
                    autoComplete="off"
                    placeholder="Nombre del Servicio..."
                  />
                </div>
                <div className="col-md-2 mt-2">
                  <button className="btn btn-dark">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
                <small className="form-text text-muted">
                  Ej. Mascarilla, Corte para Caballero...
                </small>
              </div>
            </form>
          </div>
          <div className="col-md-7">
            <h4>
              <b>Servicios Disponibles</b>
            </h4>
            <hr />
            {isLoadingServices ? <SpinnerLoader /> : renderServices}
          </div>
        </div>
      </div>
    </div>
  );
};
