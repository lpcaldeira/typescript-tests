type ToDo = {
  title: string
  description: string
  completed: boolean
}

const todo: Readonly<ToDo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false
}

console.log(todo)

// não alterar diretamente o objeto para trabalhar o principio da imutabilidade, o correto é cria outro
// todo.completed = true

// correto fica assim
function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) {
  return {...todo, ...fieldsToUpdate}
}

// fazendo assim, tenho 2 opções
// - setar todos os campos do type como opcionais (péssima opção, pois vai permitir a criação de um ToDo vazio)
// - adicionar um Partial<type> na função updateToDo que vai manter o que já tem no objeto, permitindo alteração apenas do que vier por parâmetro
const todo2: ToDo = updateToDo(todo, { completed: true })
console.log(todo2)

// Vai criar o type ToDoPick apenas pegando title e completed
type ToDoPick = Pick<ToDo, "title" | "completed">
let todo3: ToDoPick = {
  title: "Fechar Ghost of Tsushima - Pick",
  completed: false
}
function updateToDoPick(todopreview: ToDoPick, fieldsToUpdate: Partial<ToDoPick>) {
  return {...todopreview, ...fieldsToUpdate}
}
todo3 = updateToDoPick(todo3, { completed: true})
console.log(todo3)

// Vai criar o type ToDoOmit apenas com title e completed e omitir o description
type ToDoOmit = Omit<ToDo, "description">
let todo4: ToDoOmit = {
  title: "Fechar Ghost of Tsushima - Omit",
  completed: false
}
function updateToDoOmit(todoomit: ToDoOmit, fieldsToUpdate: Partial<ToDoOmit>) {
  return {...todoomit, ...fieldsToUpdate}
}
todo4 = updateToDoOmit(todo4, { completed: true})
console.log(todo4)