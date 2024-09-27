import React, { useState } from 'react';
import Aviso from './Aviso';
import styles from '../Styles/Header.module.css';
import logoImg from "../imagens/trivago-logo.png";
import { Link } from 'react-router-dom';

export default function Header({ HomeOff }) {
    const [exibirAviso, setExibirAviso] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleAviso = (e) => {
        e.preventDefault();
        setExibirAviso(true);
    };

    const fecharAviso = () => {
        setExibirAviso(false);
    };

    const toggleDarkMode = () => {
        document.body.style.filter = isDarkMode ? 'none' : 'invert(1)';
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            {exibirAviso && <Aviso fecharAviso={fecharAviso} />}
            <header>
                <img className={styles.logoTransparente} src={logoImg} alt="Logo" />
                <nav>
                    <ul className={styles.lista_nav_header}>
                        {HomeOff !== true && (
                            <li>
                                <Link to="/" className="link-home">
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                        )}
                        <li>
                            <a href="javascript:void(0)" onClick={handleAviso}>
                                <i className="fas fa-info-circle"></i> Sobre
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={handleAviso}>
                                <i className="fas fa-shopping-cart"></i> Carrinho
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" onClick={handleAviso}>
                                <i className="fas fa-address-book"></i> Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
                <button onClick={toggleDarkMode} className={styles.darkModeButton}>
                    {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                </button>
            </header>
        </>
    );
}
