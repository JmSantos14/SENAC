
import './App.css';
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  function sendForm(props){

  }

  return (
    <div className="App">
      <div className='Container'>
        <form method='POST'>
          <div className='Input-area'>
            <label>Titulo</label>
            <input value={title} placeholder='Digite a tarefa' placeholderColor="#9E9E9E"></input>
          </div>
          <div className='Button-area'> 
            <button className='Btn-clear'>Limpar</button>
            <button className='Btn-send' >Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
