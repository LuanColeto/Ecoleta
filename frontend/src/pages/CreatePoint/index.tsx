import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import {Map, TileLayer, Marker} from 'react-leaflet'
import api from '../../services/api';

import './styles.css'

import Logo from '../../assets/logo.svg'

const CreatePoint = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        })
    }, []);

    return (
        <div id="page-create-point">
            <header>
                <img src={Logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft/>
                    Voltar para Home
                </Link>
            </header>

            <form >
                <h1>Cadastro do <br/> ponto de coleta</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="name">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="name">Whatsapp</label>
                            <input
                                type="text"
                                name="Whatsapp"
                                id="Whatsapp"
                            />
                        </div>

                    </div>

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>


                    <Map center={[-25.4079089, -49.2619138]} zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker position={[-25.4079089, -49.2619138]} />
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf">
                                <option>Selecione uma UF</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="uf">Cidade</label>
                            <select name="uf" id="uf">
                                <option>Selecione uma cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Seleciona um ou mais itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li>
                                <img src="http://localhost:3333/uploads/oleo.svg" />
                                <span>Óleo de cozinha</span>
                            </li>
                        ))} 

                    </ul>
                </fieldset>
                <button type="submit">
                    Cdastrar ponto de coleta
                </button>
            </form>
        </div>
    )
}

export default CreatePoint;
