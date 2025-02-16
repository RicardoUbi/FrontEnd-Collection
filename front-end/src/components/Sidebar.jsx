import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo">
          <a href="/">
            <img src="./src/assets/icons/logo-spotify.png" alt="Spotify Logo" />
          </a>
        </div>
        <ul>
          <li >
            <a href="/">
              <span className="fa fa-home"></span>
              <span className="list_functions">Inicio</span>
            </a>
          </li>
          <li >
            <a href="/" > 
              <span className="fa fa-search"></span>
              <span className="list_functions">Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span className="fa fas fa-book"></span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa fa-plus"></span>
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É facil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="">Cookies | Por RicardoUbi</a>
        </div>
        <div className="languagens">
          <button className="languagens__button">
            <span className="fa fa-globe"></span>
            <span >Português do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
