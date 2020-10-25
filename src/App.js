import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './pages/Carrinho';
import TelaFinalDaCompra from './pages/TelaFinalDaCompra';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
