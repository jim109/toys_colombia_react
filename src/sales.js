import React from "react";
import ItemSales from "./itemSales";

function Sales() {
  return (
    <section className="grid">
      {salesList.map(({ description, id, price, imgs }) => (
        <ItemSales
          key={id}
          id={id}
          description={description}
          price={price}
          imgs={imgs}
        />
      ))}
    </section>
  );
}

export default Sales;

const salesList = [
  {
    id: 1,
    description: "Funko Pop Wonder Woman",
    price: "$ 70.000",
    imgs: "./wonder.png",
  },
  {
    id: 2,
    description: "Funko Pop Eva unit 01",
    price: "$ 120.000",
    imgs: "./Eva01.png",
  },
  {
    id: 3,
    description: "Funko Pop Orochimaru",
    price: "$ 64.000",
    imgs: "./orochimaru.png",
  },
  {
    id: 4,
    description: "Funko Pop Gaara",
    price: "$ 64.000",
    imgs: "./gaara.png",
  },
  {
    id: 5,
    description: "Funko Pop Lord Zed",
    price: "$ 64.000",
    imgs: "./lord.png",
  },
  {
    id: 6,
    description: "Funko Pop Prison Break",
    price: "$ 64.000",
    imgs: "./prison.png",
  },
];
