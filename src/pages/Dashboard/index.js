import React, { useEffect, useState } from 'react';

import './styles.css';
import Loading from '../../components/Loading';
import logo from '../../assets/logo.svg';

import { HubConnectionBuilder } from '@aspnet/signalr'

import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import api from '../../services/api';

export default function Dashboard () {
    const [assets, setAssets] = useState([]);
    const [todayDate, setTodayDate] = useState('');
    const socketUrl = 'http://ec2-18-228-245-140.sa-east-1.compute.amazonaws.com:5000/hub/notification';

    const hubConnection = new HubConnectionBuilder().withUrl(socketUrl).build();
    
    async function connectSocket () {

        try {
            
            await hubConnection.start();
            
            hubConnection.invoke('GetQuote', 23).then((ret) => console.log('invoke', ret));

            hubConnection.on('Quote', (symbol, price, variation) => {
                console.log('retorno', symbol)
            });

        } catch(erro) {
            console.log('Erro no socket', erro);
        }
        
    }

    function formatDate() {
        const date  = new Date();
        return  date.getDate() + 1 > 10 ? 
            `${date.getDate()}/0${date.getMonth() +1}/${date.getFullYear()}`:
            `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
    }
    
    
    
    
    
    useEffect(() => {
        api.get('/order/managament/assets').then(receivedAssets => {
            setAssets(receivedAssets.data.data);
        });
        connectSocket();
        setTodayDate(formatDate());

        return function closeConnection() {
            hubConnection.stop().catch(err => console.log('erro no stop', err));
        }
    }, []);
    // add user id no array de dependencias ou algo do tipo

    return (
        <div className="dashboard-container">
            <header>
                <img src={logo} alt="trader logo"/>

                <Link className="button" to="/wallet"> 
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
                                <span>{todayDate}</span>
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
                            {/* /* aqui deve vir o grafico */ }
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