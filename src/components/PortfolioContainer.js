import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, deletePortFolio }) {
  function RenderCard ({ stock, deletePortFolio }) {
    function handleDelete() {
        deletePortFolio(stock.id)
    }

    return(
      <div style={{ border: "1px solid black" }}      className="card" onClick={handleDelete}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">$ {stock.price}</p>
        </div>
      </div>
    )
  }

  const renderPortfolio = portfolio.map((stock) => {
    return (
      <RenderCard key={stock.id} stock={stock} deletePortFolio={deletePortFolio}/>
    )
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
