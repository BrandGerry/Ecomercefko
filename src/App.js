import React from "react"
import{BrowserRouter,Switch, Route} from "react-router-dom"

//CONTEXT
import { StoreProvider } from "./Contexts/StoreContext"

//COMPONENTES
import StoreHome from "./Vistas/StoreHome"
import Checkout from "./Componentes/Checkout/CheckOut"
import Confirmacion from "./Componentes/Confirmacion/Confirmacion"

//STYLOS
import "./App.css"

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <StoreHome />
          </Route>

          <Route path="/checkout" exact>
            <Checkout />
          </Route>

          <Route path="/confirm" exact>
            <Confirmacion />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
