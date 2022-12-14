import React from "react";
import "./login.css";

export const Footer = () => {
  //   const conteiner = {
  //     position: "fixed",
  //     display: "grid",
  //     place-content: "center",
  //     bottom: "0",
  //     left: "0",
  //     background: "black",
  //     width: "100%",
  //     height: "4rem",
  //     text-align: "center",
  //     align-items: "center"
  // }

  return (
    <div className="">
      <br />
      <footer className="container-fluid bg-black text-center p-3">
        <div className="container">
          <p class="card-text alin-items-center">Fundacion Agrecol Andes.</p>
          <nav className="row">
            {localStorage.getItem("login") ? (
              <>
                <h6 href="/login" className="text-white aling-items-center">
                  {JSON.parse(localStorage.getItem("login")).email}
                </h6>
              </>
            ) : (
              <>
                <a href="/login" className="text-white aling-items-center">
                  &copy; Administrador
                </a>
              </>
            )}
          </nav>
        </div>
      </footer>
    </div>
  );
};
