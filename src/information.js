import React from "react";

function Information() {
  return (
    <section className="grid-1">
      <div className="pay">
        <img src="./payment.svg" alt="" />
        <h3>Paga con tarjeta o efectivo</h3>
        <p>
          Recibimos pagos con tarjeta de credito <br />o debito, depositos
          bancarios, efecty, <br />
          puntos baloto
        </p>
      </div>
      <div className="pay">
        <img src="./shipping.svg" alt="" />
        <h3>Recibe tu producto</h3>
        <p>
          Recibe el producto en tu casa o <br />
          recojelo en la tienda. Sigue tu compra <br />
          hasta que llegue a tus manos.
        </p>
      </div>
      <div className="pay">
        <img src="./protected.svg" alt="" />
        <h3>Compra Protegida</h3>
        <p>
          Te acompañamos hasta que recibas lo que <br />
          comprastes. Y si no es lo que esperabas, te <br />
          devolvemos el dinero.
        </p>
      </div>
    </section>
  );
}

export default Information;
