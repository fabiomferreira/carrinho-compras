import React, { createContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cabecalho from './components/Cabecalho';
import Carrinho from './pages/Carrinho';
import TelaFinalDaCompra from './pages/TelaFinalDaCompra';
import styled from 'styled-components';
import Informativos from './components/Informativos';
import Parabens from './pages/Parabens';

export const CompraContext = createContext({
  itens: [],
  setItens: () => {},
  valorTotal: 0,
  setValorTotal: () => {},
});

function App() {
  const [itens, setItens] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const cabecalho = document.getElementById('cabecalho');

  return (
    <div className="App">
      <CompraContext.Provider value={{ itens, setItens, valorTotal, setValorTotal }}>
        <Router>
          <Cabecalho />
          <Conteudo offset={!cabecalho || cabecalho.clientHeight}>
            <Informativos />
            <Switch>
              <Route path="/sucesso">
                <Parabens />
              </Route>
              <Route path="/final-compra">
                <TelaFinalDaCompra />
              </Route>
              <Route path="/">
                <Carrinho />
              </Route>
            </Switch>
          </Conteudo>
        </Router>
      </CompraContext.Provider>
    </div>
  );
}

const Conteudo = styled.div`
  display: flex;
  padding-top: ${({ offset }) => offset || 165}px;
  flex-direction: column;
`;

export default App;
