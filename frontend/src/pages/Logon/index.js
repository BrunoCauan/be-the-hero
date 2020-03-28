import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import Logo from '../../components/Logo';
import BackLink from '../../components/BackLink';

import heroesImg from '../../assets/heroes.png';

function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch {
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <Logo />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        type="text" 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />  
                    <button className="button" type="submit">Entrar</button>

                    <BackLink to="/register" text="Não tenho registro" />
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
  }
  
  export default Logon;