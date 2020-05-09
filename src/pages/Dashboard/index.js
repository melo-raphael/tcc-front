import React from 'react';

import './styles.css';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

export default function Dashboard () {
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

            <ul>
                <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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
                {/* so pra teste */}
                <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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
                </li> <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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
                </li> <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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
                </li> <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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
                </li> <li>
                    <div className="card-header">
                        <div className="asset-image">
                            <img src="https://app.vexter.com.br/assets/img/assets/NO-IMAGE-ASSETS.PNG" alt="imagem do ativo"/>
                        </div>

                        <div className="asset-info">
                            <h3>Magazine Luiza</h3>

                            <div className="info-details">
                                <span>MGLU3</span>
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

            </ul>
        </div>
    );
}