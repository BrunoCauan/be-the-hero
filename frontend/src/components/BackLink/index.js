import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

function BackLink({ to, text, linkComponent }) {
    return (
        <Link className="back-link" to={to}>
            {getIcon()}
            {text}
        </Link>
    );

    function getIcon() {
        return linkComponent === 'arrowLeft' ? <FiArrowLeft size={16} color="#e02041"/> : <FiLogIn size={16} color="#e02041"/>;
    }
  }
  
  export default BackLink;