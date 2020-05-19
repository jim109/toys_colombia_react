import React from "react";

function ItemSales(props) {
  return (
    <div className="sales">
      <img src="img/wonder.png" alt="" width="300" />
      <h2>{props.description}</h2>
      <h3>{props.price}</h3>
      <a href="venta.html">
        <button className="main_button">Lo quiero</button>
      </a>
    </div>
  );
}

export default ItemSales;
