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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: '' 
    }
  }

  addComentario = (event) => {
    event.preventDefault();
    console.log('add comentario function')

    const novoComentario = { ...this.state.novoComentario, data: new Date() }

    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email:'', mensagem:'' }
    })

  }

  digita = event => {
    const { name, value } = event.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } })
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

          <form method='post' onSubmit={this.addComentario}>
            <h2>Add Comentario</h2>
            <div>
              <input 
              type='text' 
              name='nome'
              value={this.state.novoComentario.nome}
              onChange={this.digita}
              placeholder='Digite seu nome' />
            </div>
            <div>
              <input 
              type='email' 
              name='email' 
              value={this.state.novoComentario.email}
              onChange={this.digita}
              placeholder='Digite seu email' />
            </div>
            <div>
              <textarea 
              name='mensagem'
              value={this.state.novoComentario.mensagem}
              onChange={this.digita}
              rows='4'/>
            </div>
            <button type='submit'>add Comentario</button>
          </form>

      </div>
    );
  }

}

export default App;