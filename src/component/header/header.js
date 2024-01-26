import React from "react";
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import searchIco from '../../assets/icons/search.png';

const Header = () =>{
    return(
      <div className="main-container">
        <nav className="header__navigation">
          <div className="navigation">
            <button className="arrow-left">
              <img src={smallLeft} alt="Seta esquerda" />
            </button>
            <button className="arrow-right">
              <img src={smallRight} alt="Seta direita" />
            </button>
            <div className="header-search">
              <img src={searchIco} alt="" />
              <input id="search-input" type="text" maxlength="800" 
              placeholder="O que você quer ouvir?" value=""/>
            </div>
          </div>

          <div className="header-login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
        </nav>
      </div>
    )
};

export default Header;