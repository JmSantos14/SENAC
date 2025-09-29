// src/utils/createTask.js


export function createTask(title) {
  const trimmed = title.trim()
  if (!trimmed) return null

//   Gerando id aleatorio de 4 digitos
  const id = Math.floor(Math.random() * 9000) + 1000 

  return {
    id,
    title: trimmed
  }
}
