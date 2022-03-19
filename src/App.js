import './App.css';
import Comentarios from './components/Comentarios';
import React, { Component } from 'react';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Joao',
        email: 'joao@mail.com',
        data: new Date(2022, 4, 22),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Maria',
        email: 'maria@mail.com',
        data: new Date(2022, 6, 14),
        mensagem: 'Olá, tudo bem, sim...'
      }
    ]
  }

  addComentario = () => {
    console.log('add comentario function')

    const newComent = {
      nome: 'Peter',
      email: 'peter@mail.com',
      data: new Date(),
      mensagem: "Olá Pessoal ......"
    }

    //let list = this.state.comentarios;
    //list.push(newComent)
    //this.setState({ comentarios: list})

    this.setState({comentarios: [...this.state.comentarios, newComent]})

  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>

        {
          this.state.comentarios.map((comentarios, indice) => (        
            <Comentarios 
            key={indice}
            nome={comentarios.nome} 
            email={comentarios.email} 
            data={new Date(2020, 3, 19)}>
            {comentarios.mensagem}
            {console.log(indice)}
            </Comentarios>
          ))}

          <button onClick={this.addComentario}>Add comentario</button>

      </div>
    );
  }

}

export default App;