import React, { useState } from 'react';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import {FaSignInAlt} from 'react-icons/fa';
import loginImage from '../../assets/login-image.svg';

import logo from '../../assets/logo.svg';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

export default function Login () {
    const loginUrl = 'http://ec2-18-228-245-140.sa-east-1.compute.amazonaws.com:9000/im/identity';
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin(e) {
        e.preventDefault();
        const data = { user: email, password };
        
        try {
            const loginResponse = await axios.post( loginUrl, data);
            const { jwt } = loginResponse.data.data;
            
            
                localStorage.setItem('jwtToken', jwt);

                const  listaAtivos = JSON.stringify([{
                    userId: "b07038b7-9e3a-4df9-bdc3-0f87b35a91c9",
                    assetId: 'PETR4',
                    value: parseFloat('21.37'),
                    type: 'buy',
                    amount: 100
                },{
                    userId: "b07038b7-9e3a-4df9-bdc3-0f87b35a91c9",
                    assetId: 'OIBR3',
                    value: parseFloat('0.980'),
                    type: 'buy',
                    amount: 100
                }]);
            
                localStorage.setItem('listaAtivos', listaAtivos);
            
                history.push('/dashboard');
            
        } catch(err) {
            alert(`erro no login usuário ou senha incorretos`);
        }
    }

    return (
        <div className="login-container">
            <img src={loginImage} alt=""/>

            <section className="form">
                <img src={logo} alt=""/>

                <form onSubmit={handleLogin}>
                    <h1>Iniciar Sessão</h1>
                    
                    <input placeholder="E-mail"
                    type='email'
                    required={true}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Senha" 
                    type="password"
                    required={true}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
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