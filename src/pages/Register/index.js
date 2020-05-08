import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

export default function Register () {

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="trader logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataform 
                        e comece a lucar com trades da bolsa de valores.
                    </p>

                    <Link className="default-link" to="/"> 
                        <FaArrowLeft size= {16} color="#8A05BE"/>
                        Voltar para o login
                    </Link>
                </section>
                
                <form>

                    <div className="input-group">
                        <input placeholder="Nome"/>
                        <input placeholder="Sobrenome"/>
                    </div>

                    <input type="email "placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}