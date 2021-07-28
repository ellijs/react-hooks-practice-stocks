import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stocks }) {
  const [ STOCKS, setStocks ] = useState(stocks)
  const [ portfolio, setPortfolio ] = useState([])
  const [ sortBy, setSortBy ] = useState("")
  const [ selectedCategory, setSelectedCategory ] = useState("")

  const addToPortfolio = (id) => {
      const portfolioList = [ ...portfolio ]
      const newList = STOCKS.find(stock=> stock.id === id)
      setPortfolio(portfolioList.concat(newList))
  }

  const deletePortFolio = (id) => {
      setPortfolio(portfolio.filter(stock=> stock.id !== id))
  }
  
  const reRenderStockList = (value) => {
    if(value === "Alphabetically") {
      const sortedList = [ ...STOCKS ]
      sortedList.sort((a,b)=> a.ticker < b.ticker ? -1: 1)
      setStocks(sortedList)
    } else if (value === "Price") {
      const sortedByPrice = STOCKS.sort((a,b)=> a.price < b.price ? -1 : 1)
      setStocks(sortedByPrice)
    }
  }

  const filterStocks = (name, value) => {
    console.log(name, value)
    if (name === "sort") {
      setSortBy(value)
      reRenderStockList(value) 
    } else {
      setSelectedCategory(value)
    }
  }

  const seclectedCategoryList = STOCKS.filter((stock) => {
    if(!selectedCategory || selectedCategory === "All") {
      return true
    } else {
      return stock.type === selectedCategory
    }
  })

  return (
    <div>
      <SearchBar filterStocks={filterStocks}/>
      <div style={{display: "flex"}} className="row">
        <div className="col-8">
          <StockContainer stocks={seclectedCategoryList} addToPortfolio={addToPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} deletePortFolio={deletePortFolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
