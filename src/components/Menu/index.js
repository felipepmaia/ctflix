import React from 'react';
import Logo from '../../assets/img/Logo.png';
//import ButtonLink from './components/ButtonLink';
import './Menu.css';
import Button from '../Button';

function Menu(){    //componente com letra Maiuscula
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="CTflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;    