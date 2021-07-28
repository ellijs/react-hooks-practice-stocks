import React, { useState } from "react";

function Stock({ stock, addToPortfolio }) {
  const { id, ticker, name, price, type} = stock
  const [ isClicked, setIsClicked ] = useState(false)

  const handlePurchase = () => {
      addToPortfolio(stock.id)
      setIsClicked(!isClicked)

  }

  return (
    <div>
      <div onClick={handlePurchase}style={{ border: "1px solid black" }} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {/* <p className="card-text">{ticker}</p> */}
          <p className="card-text">$ {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
