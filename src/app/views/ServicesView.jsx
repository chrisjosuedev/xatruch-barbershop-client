import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form";
import queryString from "query-string";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import { NavBar } from "../../ui"
import { useServiceStore } from "../../hooks";
import { CardDetailService, SpinnerLoader } from "../components";

export const ServicesView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { services,
    isLoadingServices,
    startLoadingServices,
    startFilteringServices,
    startFilteringReset } = useServiceStore();


  const { register, handleSubmit, setFocus, formState: {
    errors
  } } = useForm({
    defaultValues: {
      searchText: q
    }
  });

  const showSearch = (q.length === 0);
  const showError = (services.length === 0);

  // Load Initial Services Data
  useEffect(() => {
    startLoadingServices();
    setFocus("searchText");
  }, []);

  const onSearchSubmit = (data) => {
    const { searchText } = data;

    if (searchText.length === 0) return;

    startFilteringServices(searchText);
    navigate(`?q=${searchText}`);
  }

  const onChangeSearch = (e) => {
    const searchChange = e.target.value;
    if (!!searchChange || searchChange.length === 0) startFilteringReset();
  }

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container animate__animated animate__fadeIn">
        <div className="row p-4">
          <div className="col-md-5">
            <h4> <b> Filtrar </b></h4>
            <hr />
            <form onSubmit={handleSubmit(onSearchSubmit)}>
              <div className="form-row">
                <div className="col-md-10 mt-2">
                  <input
                    type="text"
                    className={`form-control ${errors.searchText ? 'is-invalid' : ''}`}
                    {...register("searchText", {
                      onChange: onChangeSearch,
                      minLength: {
                        value: 2,
                        message: "Ingrese un tag ó nombre de servicio."
                      }
                    })}
                    autoComplete="off"
                    placeholder="Nombre del Servicio..."
                  />
                  <span className="invalid-feedback">
                    {errors.searchText && errors.searchText.message}
                  </span>
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
            <h4><b>Servicios Disponibles</b></h4>
            <hr />
            <div
              className="alert alert-danger animate__animated animate__fadeIn"
              style={{ display: showError && !showSearch ? '' : 'none' }}
            >
              No resultados con: <b>{q}</b>
            </div>
            {(isLoadingServices) && (<SpinnerLoader />)}
            {
              services.map((serv) => (
                <CardDetailService
                  key={serv.id}
                  id={serv.id}
                  serviceName={serv.serviceName}
                  price={serv.price}
                />
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}
