import React, { useContext } from "react";
import { SearchContext } from "../components/SearchContext"; // ajuste o caminho conforme necessário

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <div className="header-container">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src="./src/assets/icons/small-left.png" alt="Seta Esquerda" />
          </button>
          <button className="arrow-right">
            <img src="./src/assets/icons/small-right.png" alt="Seta Direita" />
          </button>
          <div className="header__search">
            <img src="./src/assets/icons/search.png" alt="Pesquisar" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              maxLength="800"
              placeholder="O que você quer ouvir?"
            />
          </div>
        </div>

        <div className="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
