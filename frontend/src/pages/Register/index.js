import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import Logo from '../../components/Logo';
import BackLink from '../../components/BackLink';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp, 
            city, 
            uf,
        };

        try {
            const response = await api.post('ongs', data);
            
            alert(`Seu ID de acesso: ${response.data.id}`);
            
            history.push('/');
        } catch(err) {
            alert(`Erro no cadastro, tente novamente!`);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <Logo />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na pLataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    
                    <BackLink to="/" text="Já tenho registro" linkComponent="arrowLeft" />
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        type="text" 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        minlength="2"
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="WhatsApp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                        minlength="11" maxlength="11"
                    />

                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            minlength="3" maxlength="3"
                        />
                        <input 
                            type="text" 
                            placeholder="UF" 
                            style={{ widht: 80 }} 
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                            minlength="2" maxlength="2"
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default Register;