import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import TelaFinalDaCompra from './pages/TelaFinalDaCompra';

export const CompraContext = createContext({ itens: [], setItens: () => {} });

function App() {
  const [itens, setItens] = useState([]);

  return (
    <div className="App">
      <CompraContext.Provider value={{ itens, setItens }}>
        <Router>
          <Switch>
            <Route path="/final-compra">
              <TelaFinalDaCompra />
            </Route>
            <Route path="/">
              <Carrinho />
            </Route>
          </Switch>
        </Router>
      </CompraContext.Provider>
    </div>
  );
}

export default App;
