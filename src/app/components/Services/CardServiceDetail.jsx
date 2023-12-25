import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus } from "@fortawesome/free-solid-svg-icons";


export const CardDetailService = ({ id, serviceName, price }) => {
  const [toCart, setToCart] = useState(true);

  /* TODO: Check elements in Store are in Cart, when ADD TO CART, check if auth, if not, redirect
    to signIn and then, back to Services Routes....
  */

  const onToCart = (id) => {
    console.log("Service Id: " + id);
    setToCart(!toCart);
  }

  return (
    <div className="card m-2">
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <h5 className="card-title">{serviceName}</h5>
            <p className="card-text">L. {price.toFixed(2)}</p>
          </div>
          <div className="col-md-4 text-right">
            <button onClick={() => onToCart(id)} className="btn btn-dark">
              <FontAwesomeIcon icon={(toCart ? faCartPlus : faMinus)} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
