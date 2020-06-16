import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { FaPowerOff } from 'react-icons/fa';
import './styles.css';

function Wallet() {
    const socketUrl = 'http://localhost:5000/hub/notification';
    const history = useHistory();

    const lixo = localStorage.getItem('listaAtivos');
    console.log('listaAtivos', JSON.parse(lixo))
    let listaAtivos = JSON.parse(lixo);



    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }
    return(
        <div className="wallet-container">
            <header>
                <img src={logo} alt="trader logo"/>

                <Link className="button" to="/dashboard"> 
                   Home
                </Link>
                <button type="button" onClick={() => handleLogout()}>
                    <FaPowerOff size={18} color="#8A05BE"/>
                </button>
            </header>

            <h1>Ativos posicionados</h1>

            <div className="positions">
                <div className="positions-header">
                    {/* simbolo, quantidade, preco, tipo  */}
                    <p>Ativo</p>
                    <p>Quantidade</p>
                    <p>Preço</p>
                    <p>Tipo</p>
                </div>
                <div className="divider"></div>
                <ul>
                    {listaAtivos.map(asset => (
                        <>
                        <li>
                            <p>{asset.assetId}</p>
                            <p className="quantity">{asset.amount}</p>
                            <p>{asset.value}</p>
                            <p>{asset.type.toUpperCase()}</p>
                        </li>
                        <div className="divider"></div>
                        </>
                    ))}
                   
                </ul>
                <div className="positions-header">
                    {/* simbolo, quantidade, preco, tipo  */}
                    <p>Saldo Total</p>
                    <p>R$ 100.000,00</p>
              
                </div>
            </div>
            
          
        </div>
    );
}

export default Wallet;