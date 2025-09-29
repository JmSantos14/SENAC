import { useState } from 'react'
import './taskList.modules.css'

function TasksList({ tasks, onDeleteTask, onEditTask }) {
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  if (!tasks || tasks.length === 0) return <p className="NoTasks">Nenhuma tarefa cadastrada.</p>

  const saveEdit = (taskId) => {
    const title = editTitle.trim()
    if (!title) return
    onEditTask(taskId, title)
    setEditingId(null)
    setEditTitle('')
  }

  const handleCheck = (e) => {
    const span = e.target.nextSibling
    if (e.target.checked) {
      span.classList.add('Checked')
    } else {
      span.classList.remove('Checked')
    }
  }

  return (
    <div className="Tasks">
      <div className="TasksHeader">
        <h2>Tarefas</h2>
      </div>

      <ul className="TasksList">
        {tasks.map(task => {
          const isEditing = editingId === task.id
          return (
            <li key={task.id} className="TaskItem">
              <span className="TaskTitle">{task.id}</span>
              <div className="TaskTop">
                <input type="checkbox" onChange={handleCheck} />
                {isEditing ? (
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && saveEdit(task.id)}
                    className="EditInput"
                  />
                ) : (
                  <span className="TaskTitle">{task.title}</span>
                )}
              </div>

              <div className="Button-area">
                <button className="Btn-erase" type="button" onClick={() => onDeleteTask(task.id)}>
                  Excluir
                </button>
                <button
                  className="Btn-edit"
                  type="button"
                  onClick={() => isEditing ? saveEdit(task.id) : (setEditingId(task.id), setEditTitle(task.title))}
                >
                  {isEditing ? 'Salvar' : 'Editar'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TasksList
