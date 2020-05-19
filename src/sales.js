import React from "react";

function Sales() {
  return (
    <section className="grid">
      <div className="sales">
        <img src="img/wonder.png" alt="" width="300" />
        <h2>Funko Pop Wonder Woman</h2>
        <h3>$ 70.000</h3>
        <a href="venta.html">
          <button className="main_button">Lo quiero</button>
        </a>
      </div>
      <div className="sales">
        <img src="img/Eva01.png" alt="" width="300" />
        <h2>Funko Pop Eva unit 01</h2>
        <h3>$ 120.000</h3>
        <label for="">Comprar</label>
      </div>
      <div className="sales">
        <img src="img/orochimaru.png" alt="" width="300" />
        <h2>Funko Pop Orochimaru</h2>
        <h3>$ 64.000</h3>
        <label for="">Comprar</label>
      </div>
      <div className="sales">
        <img src="img/gaara.png" alt="" width="300" />
        <h2>Funko Pop Gaara</h2>
        <h3>$ 64.000</h3>
        <label for="">Comprar</label>
      </div>
      <div className="sales">
        <img src="img/lord.png" alt="" width="300" />
        <h2>Funko Pop Lord Zed</h2>
        <h3>$ 64.000</h3>
        <label for="">Comprar</label>
      </div>
      <div className="sales">
        <img src="img/prison.png" alt="" width="300" />
        <h2>Funko Pop Prison Break</h2>
        <h3>$ 64.000</h3>
        <label for="">Comprar</label>
      </div>
    </section>
  );
}

export default Sales;
