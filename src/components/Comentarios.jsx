import React from 'react';
import './Comentario.css';

const Comentarios = () => {
    let nome = 'Maria';
    return (
        <div className='Comentarios'>
            <div>Componentes de Comentarios</div>
            <div>Olá meu nome é {nome}</div>
        </div>

    )
}

export default Comentarios