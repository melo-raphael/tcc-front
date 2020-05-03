import React from 'react';

import './styles.css';

import {FaSignInAlt} from 'react-icons/fa';
import LoginImage from '../../assets/login-image.svg';
import Logo from '../../assets/logo.svg';

export default function Login () {

    return (
        <div className="login-container">
            <img src={LoginImage} alt=""/>

            <section className="form">
                <img src={Logo} alt=""/>

                <form>
                    <h1>Iniciar Sessão</h1>
                    
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha" type="password"/>
                    <button className="button" type="submit">Entrar</button>

                    <a href="#">
                        <FaSignInAlt size= {16} color="#8A05BE" />
                        Não tenho cadastro
                    </a>
                </form>                
            </section>
        </div>
    );
}