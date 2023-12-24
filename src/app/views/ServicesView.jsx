import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

import { NavBar } from "../../ui"
import { CardDetailService, SpinnerLoader } from "../components";
import { useServiceStore } from "../../hooks";

export const ServicesView = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { services, isLoadingServices, startLoadingServices } = useServiceStore();

  useEffect(() => {
    startLoadingServices();
  }, []);

  const showSearch = (q.length === 0);
  const showError = (services.length === 0)

  const searchText = ""; // get from form...

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log('searching...');
    navigate(`?q=${searchText}`)
  }


  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container animate__animated animate__fadeIn">
        <div className="row p-4">
          <div className="col-md-5">
            <h4> <b> Filtrar </b></h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
              <div className="form-row">
                <div className="col-md-10 mt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    placeholder="Nombre del Servicio..."
                  />
                </div>
                <div className="col-md-2 mt-2">
                  <button className="btn btn-dark">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
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
              No Results with <b>{q}</b>
            </div>
            {(isLoadingServices) && (<SpinnerLoader />)}
            {
              services.map((serv) => (
                <CardDetailService
                  key={serv.id}
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
