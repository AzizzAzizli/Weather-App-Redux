import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import "./nav.css";
import { ROUTES } from "../../constants/Routes";

export const Nav = () => {
  let navigator = useNavigate();

  return (
    <>
      <ul className="d-flex gap-5 bg-primary p-3 w-100">
        <button
          onClick={() => navigator(-1)}
          className="btn text-black carousel-control-prev-icon"
        ></button>
        <button
          onClick={() => navigator(1)}
          className="btn text-black carousel-control-next-icon"
        ></button>
        <li className="text-light li" onClick={() => navigator(ROUTES.home)}>
          Home
        </li>
    
      </ul>
    </>
  );
};
