import React from "react";
import LogoSporify from '../../assets/icons/logo-spotify.png';
import HomeIcon from '../../assets/icons/Home Icon.svg';
import SearchIcon from '../../assets/icons/Search Icon.svg';
import YourPlaylistIcon from '../../assets/icons/Your Playlist Icon A.svg';
import AddIcon from '../../assets/icons/Add Icon.svg';

const Sidebar = () =>{
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
            <div className="logo">
                <a href="">
                    <img src={LogoSporify}alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                <a href="">
                    <img src={HomeIcon} alt="Icone da home" />
                    <span>Início</span>
                </a>
                </li>
                <li>
                <a href="">
                    <img src={SearchIcon} alt="Icone de Lupa" />
                    <span>Buscar</span>
                </a>
                </li>
            </ul>
            </nav>

            <div className="library">
            <div className="library__content">
                <button className="library__button">
                <img src={YourPlaylistIcon} alt="Icone de biblioteca" />
                <span>Sua biblioteca</span>
                </button>
                <div className="library__button__plus"><img src={AddIcon} alt="Icone de soma" /></div>
            </div>

            <section className="section-playlist">
                <div className="section-playlist__content">
                <span className="text title"> Crie sua primeira playlist</span>
                <span className="text subtitle">É fácil, vamos te ajudar</span>
                <button className="section-playlist__button">
                    <span>Criar Playlist</span>
                </button>
                </div>
            </section>

            <section className="section-podcast">
                <div className="section-podcast__content">
                <span className="text title"> Que tal seguir um podcast novo?</span>
                <span className="text subtitle">Avisaremos você sobre novos episódios.</span>
                <button className="section-podcast__button">
                    <span>Explore podcasts</span>
                </button>
                </div>
            </section>

            <div className="cookies">
                <a href="">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages__button">
                <span className="fa fa-globe"></span>
                <span>Português do Brasil</span>
                </button>
            </div>
            </div>
        </div>
    )
};

export default Sidebar;