

export function createTask(title) {
  const finalTitle = title.trim()
  if (!finalTitle) return null

//   Gerando id aleatorio de 4 digitos
  const id = Math.floor(Math.random() * 9000) + 1000 

  return {
    id,
    title: finalTitle
  }
}
