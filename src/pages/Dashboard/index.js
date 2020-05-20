import React, { useEffect, useState } from 'react';

import './styles.css';
import Loading from '../../components/Loading';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import api from '../../services/api';

export default function Dashboard () {
    
    const [assets, setAssets] = useState([]);
    
    useEffect(() => {
        api.get('/order/managament/assets').then(receivedAssets => {
            setAssets(receivedAssets.data.data);
        });
    }, []);
    // add user id no array de dependencias ou algo do tipo

    return (
        <div className="dashboard-container">
            <header>
                <img src={logo} alt="trader logo"/>

                <Link className="button" to=""> 
                    Ver carteira
                </Link>
                <button type="button">
                    <FaPowerOff size={18} color="#8A05BE"/>
                </button>
            </header>

            <h1>Ativos disponíveis</h1>
            {assets.length === 0 ? <Loading /> :

            (<ul>
            { assets.map(asset => (
                <li key={ asset.name }>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src={ asset.imageUrl } alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>{ asset.name }</h3>

                            <div className="info-details">
                                <span>{ asset.symbol }</span>
                                <span>09/05/2020</span>
                            </div>
                        </div>
                    </div>

                    <span className="divider"></span>
                    
                    <div className="graph-container">
                        <div className="graph-header">
                            <span>Variação (1s)</span>
                            <span>5.04%</span>
                        </div>
                        <canvas>
                            /* aqui deve vir o grafico */
                        </canvas>
                    </div>

                    <div className="buy-sell-area">
                        <div className="button-buy-sell">
                            <div className="buy-sell-header">
                                Vender
                            </div>
                            <div className="price">
                                <span>55,23</span>
                            </div>
                        </div>

                        <div className="button-buy-sell">
                            <div className="buy-sell-header">
                                Comprar
                            </div>
                            <div className="price">
                                <span>56,00</span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
            </ul>)
}
        </div>
    );
}