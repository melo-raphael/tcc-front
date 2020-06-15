import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { FaPowerOff } from 'react-icons/fa';
import './styles.css';

function Wallet() {
    return(
        <div className="wallet-container">
            <header>
                <img src={logo} alt="trader logo"/>

                <Link className="button" to="/dashboard"> 
                   Home
                </Link>
                <button type="button">
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
                   <li>
                       <p>Petr4</p>
                       <p className="quantity">100</p>
                       <p>R$ 10,00</p>
                       <p>Compra</p>
                   </li>
                   <div className="divider"></div>
                   <li>
                       <p>Petr4</p>
                       <p className="quantity">100</p>
                       <p>R$ 10,00</p>
                       <p>Compra</p>
                   </li>
                   <div className="divider"></div>
                   <li>
                       <p>Petr4</p>
                       <p className="quantity">100</p>
                       <p>R$ 10,00</p>
                       <p>Compra</p>
                   </li>
                   <div className="divider"></div>
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