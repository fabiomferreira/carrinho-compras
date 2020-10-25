import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Carrinho from './pages/Carrinho';
import TelaFinalDaCompra from './pages/TelaFinalDaCompra';
import styled from 'styled-components';
import Informativos from './components/Informativos';

export const CompraContext = createContext({ itens: [], setItens: () => {} });

function App() {
  const [itens, setItens] = useState([]);

  return (
    <div className="App">
      <CompraContext.Provider value={{ itens, setItens }}>
        <Cabecalho />
        <Conteudo>
          <Informativos />
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
        </Conteudo>
      </CompraContext.Provider>
    </div>
  );
}

const Conteudo = styled.div`
  display: flex;
  padding-top: 165px;
  flex-direction: column;
`;

export default App;
