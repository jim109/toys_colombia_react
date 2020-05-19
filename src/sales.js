import React from "react";
import ItemSales from "./itemSales";

const salesList = [
  { id: 1, description: "Funko Pop Wonder Woman", price: "$ 70.000" },
  { id: 2, description: "Funko Pop Eva unit 01", price: "$ 120.000" },
  { id: 3, description: "Funko Pop Orochimaru", price: "$ 64.000" },
  { id: 4, description: "Funko Pop Gaara", price: "$ 64.000" },
  { id: 5, description: "Funko Pop Lord Zed", price: "$ 64.000" },
  { id: 6, description: "Funko Pop Prison Break", price: "$ 64.000" },
];

function Sales() {
  return (
    <section className="grid">
      {salesList.map(({ description, id, price }) => (
        <ItemSales key={id} id={id} description={description} price={price} />
      ))}
    </section>
  );
}

export default Sales;
