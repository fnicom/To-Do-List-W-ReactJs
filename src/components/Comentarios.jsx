import React from 'react';
import './Comentario.css';

const Comentarios = (props) => {

    return (
        <div className='Comentarios'>
            <h2>{props.nome}</h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>

    )
}

export default Comentarios