import React from "react"

interface Context {
    [key: string]: any;
  }

const PortfolioContext = React.createContext<Context>({})
export default PortfolioContext