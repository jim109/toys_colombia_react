import React from "react";
import logos from "./logo.jpg";
function Head() {
  return (
    <div className="container">
      <figure className="logo">
        <img className="imgBanner" src={logos} alt="" />
      </figure>
      <nav className="menu">
        <ol className="ol">
          <li className="li">
            <a className="a" href="x">
              Ultimas Entradas
            </a>
          </li>
          <li className="li">
            <a className="a" href="x">
              Funko Pop
            </a>
          </li>
          <li className="li">
            <a className="a" href="x">
              Noticias
            </a>
          </li>
          <li className="li">
            <a className="a" href="x">
              Contactenos
            </a>
          </li>
          <li className="li">
            <a className="a" href="x">
              Preventas
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default Head;
