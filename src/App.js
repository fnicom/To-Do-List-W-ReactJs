import './App.css';
import Comentarios from './components/Comentarios';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Comentarios nome={'John Do'} email='joao@mail.com' data={new Date(2020, 3, 19)}>
        Olá, tudo bem?
        </Comentarios>

        <Comentarios nome='Maria' email='maria@mail.com' data={new Date(2020, 5, 22)}>
        Olá, tudo bem?
        </Comentarios>
    </div>
  );
}

export default App;