import React from "react";
import "./Comentario.css";
import iamgemUsuario from "./user.png";
import { formatRelative } from 'date-fns'

const Comentarios = (props) => {
//   const estilo = {
//     color: "red",
//     padding: "10px",
//     fontSize: "30px",
//   };

  return (
    <div className="Comentarios">
      <img className="avatar" src={iamgemUsuario} alt={props.nome} />
      <div className='conteudo'>
        <h2 className="nome">{props.nome}</h2>
        <p className="email">{props.email}</p>
        <p className="mensagem">{props.children}</p>
        <p className="data">{formatRelative(props.data, new Date())}</p>
        <button onClick={props.onRemove}>&times;</button>
      </div>
    </div>
  );
};

export default Comentarios;
