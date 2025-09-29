
import './App.css';
import {useState} from 'react';
import { createTask } from './utils/createTasks';
import TasksList from './Components/TaskList/index'

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = createTask(title, tasks)
    if (!newTask) return
    setTasks(prev => [...prev, newTask])
    setTitle('')
  }

  function clearTitle() {
    setTitle('');
  }

  function handleDeleteTask(id) {
    alert(`Tarefa excluida: ${id}`)
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  function handleEditTask(id, newTitle) {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, title: newTitle } : task))
    )
  }

  return (
    <div className="App">
      <div className='Container'>
        <form onSubmit={handleSubmit}>
          <div className='Input-area'>
            <label>Titulo</label>
            <input
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite a tarefa"
            aria-label="Titulo da tarefa"
            />
          </div>
          <div className='Button-area'> 
            <button className='Btn-clear' onClick={clearTitle} type='button'>Limpar</button>
            <button className='Btn-send' type='submit'>Enviar</button>
          </div>
        </form>
      </div>
      <TasksList tasks={tasks} onDeleteTask={handleDeleteTask}  onEditTask={handleEditTask}/>
    </div>
  );
}

export default App;
