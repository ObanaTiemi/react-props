import { React, useState } from 'react';
import TxfNome from './TxfNome';

function App() {
  const [nome, setNome] = useState('');
  return (
    <div className="bg-light min-vh-100 py-4">
      {/* Container principal para centralizar e dar alinhamento */}
      <div className="container">
        {/* Cabeçalho */}
        <header className="row mb-4">
          <div className="col text-center">
            <h1 className="display-5 fw-bold text-primary">Uso de Props no React</h1>
            <p className="lead text-secondary">
              Com props podemos pegar propriedades do nosso front-end e manipular informações diretamente no front-end
            </p>
          </div>
        </header>

        <section>
          <div className="row">
            <div className="col md-4">
              <TxfNome
                valor = { nome }
                aoMudar = { setNome }
              />
            </div>
            <div className="col md-4">
              <p className="lead text-secondary">
                Seu nome: { nome || 'Nenhum nome digitado' }
              </p>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="row mt-5">
          <div className="col text-center text-muted">
            <small>&copy; {new Date().getFullYear()} Meu Projeto React. Todos os direitos reservados.</small>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
