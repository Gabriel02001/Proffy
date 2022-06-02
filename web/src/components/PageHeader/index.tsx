import React from "react";

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps { // define o formato das tipagem de um objeto
 title: string;            
 description?: string; // propriedade não obrigatoria '?'
 children: React.ReactNode   // permite colocar comp dentro de comp
}
    const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className='page-header'>
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Voltar" />
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            {props.description ? <p>{props.description}</p>  : null }
            {props.children} 
        </div>
    </header>
     
    );
}

export default PageHeader;