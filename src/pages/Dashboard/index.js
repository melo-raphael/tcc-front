import React, { useEffect, useState } from 'react';

import './styles.css';
import Loading from '../../components/Loading';
import logo from '../../assets/logo.svg';

import { HubConnectionBuilder } from '@aspnet/signalr'

import { Link, useHistory } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import api from '../../services/api';

export default function Dashboard () {
    const [assets, setAssets] = useState([]);
    const [todayDate, setTodayDate] = useState('');
    const [assetsFromSocket, setAssetFromSocket] = useState([]);
    const [finalAsset, setFinalAsset] = useState([]);
    let test = [];

    localStorage.setItem('jwtToken', 'aksjhdashdjaskhdasjkdhasjkdh')
    const token = localStorage.getItem('jwtToken');

    const history = useHistory();
    
    const socketUrl = 'http://ec2-18-228-245-140.sa-east-1.compute.amazonaws.com:5000/hub/notification';

    const hubConnection = new HubConnectionBuilder().withUrl(socketUrl).build();
    
    async function connectSocket () {

        try {
            
            await hubConnection.start();
            
            // hubConnection.invoke('GetQuote', '').then();

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

    function getPriceBySymbol(symbol) {
        let price
        assetsFromSocket.map(asset => {
            if (asset.symbol === symbol) price =  asset.price;
        });

        return price
    }
    
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    async function handleBuyOrSell(symbol, price, type) {

        const data = {
            userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            assetId: "19d37e13-101a-4c39-9738-16f8967f3ec9",
            value: parseFloat(price),
            type: type,
            amount: 100
        }

        const response = await api.post("order/managament/order", data,  {headers: {Authorization: `Bearer ${token}`}});

        console.log('compra ou venda',response)

    }

    
    useEffect(() => {
         (async function fecth() {

            const assetsResponse = await api.get('order/managament/assets');
            await connectSocket();
            setAssets(assetsResponse.data.data);

          
            hubConnection.on('Quote', (list) => {
               
                setAssetFromSocket(list)
               
            });
            setTodayDate(formatDate());

        })();



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
                <button type="button" onClick={() => handleLogout()}>
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
                        <div className="button-buy-sell" onClick={() => handleBuyOrSell('PETR4', getPriceBySymbol(asset.symbol) , 'sell')}>
                            <div className="buy-sell-header">
                                Vender
                            </div>
                            <div className="price">
                                <span>{getPriceBySymbol(asset.symbol)}</span>
                            </div>
                        </div>

                        <div className="button-buy-sell" onClick={() => handleBuyOrSell('PETR4', getPriceBySymbol(asset.symbol) , 'buy')}>
                            <div className="buy-sell-header">
                                Comprar
                            </div>
                            <div className="price">
                                <span>{getPriceBySymbol(asset.symbol)}</span>
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