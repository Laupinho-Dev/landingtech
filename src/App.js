import { useState } from "react";
import "./App.css";
import InfoSidebar from "./components/info-sidebar";

function App() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados do formulário", formData);
    alert("Formulário enviado com sucesso");
  };
  return (
    <div className="App">
      <div className="body">
        <div className="main">
          <div className="menu">
            <div className="logo">
              <h3>Landing Tech</h3>
            </div>
            <div className="item-menu">
              <a href="https://www.linkedin.com/in/paulo-henrique-de-jesus-machado-a3366a339/">
                Login
              </a>
              <a href="#">Home</a>
              <a href="/">Fale Conosco</a>
              <a href="*">Sobre Nós</a>
            </div>
          </div>
        </div>
        <div className="welcome"></div>
        <div className="form">
          <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h2>Dê o próximo passo na sua carreira:</h2>
            <div className="fields">
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
              <input
                type="text"
                name="telefone"
                placeholder="Telefone"
                onChange={handleChange}
              />
              <input
                type="text"
                name="endereco"
                placeholder="Endereço"
                onChange={handleChange}
              />
            </div>
            <button className="button" type="submit">
              Enviar
            </button>
          </form>
          </div>
        </div>
        <div className="sidebar">
          <InfoSidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
