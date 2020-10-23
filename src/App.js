import React, { useEffect, useState } from 'react';
import { obterItensDoCarrinho } from './api';
import ItemCarrinho from './components/ItemCarrinho';

function App() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    obterDados();
  }, []);

  async function obterDados() {
    const { data } = await obterItensDoCarrinho();
    setItens(
      data.map((item) => ({
        id: item.id,
        nome: item.nome,
        valor: item.valor_unitario,
        quantidade: item.quantidade,
        urlImagem: item.url_imagem,
        sku: item.sku,
      }))
    );
  }

  return (
    <div className="App">
      {itens.map((item) => (
        <ItemCarrinho key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
