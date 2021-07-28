import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
// import DataFetching from "./DataFetching"

import stocks from "./Data.js"


console.log(stocks.stocks)

function App() {
  return (
    <div>
      <Header />
      <MainContainer stocks={stocks.stocks}/>
    </div>
  );
}

export default App;
