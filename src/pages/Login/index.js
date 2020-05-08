import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

import {FaSignInAlt} from 'react-icons/fa';
import loginImage from '../../assets/login-image.svg';
import logo from '../../assets/logo.svg';

export default function Login () {

    return (
        <div className="login-container">
            <img src={loginImage} alt=""/>

            <section className="form">
                <img src={logo} alt=""/>

                <form>
                    <h1>Iniciar Sessão</h1>
                    
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha" type="password"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="default-link" to="/register">
                        <FaSignInAlt size= {16} color="#8A05BE" />
                        Não tenho cadastro
                    </Link>
                </form>                
            </section>
        </div>
    );
}