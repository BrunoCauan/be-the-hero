import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import Logo from '../../components/Logo';
import BackLink from '../../components/BackLink';

function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar caso, tente novamente!')
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <Logo />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                
                <BackLink to="/profile" text="Voltar para home" linkComponent="arrowLeft" />
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                    type="text" 
                    placeholder="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    minlength="5"
                />
                <textarea 
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    minlength="5"
                />
                <input 
                    type="number"
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    minlength="1"
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
  }
  
  export default NewIncident;