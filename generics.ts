// Dentro das <>, são passados os tipos que a gente quer utilizar dentro da função
// Se eu passar o EXTENDS, posso obrigar que só entre number e string dentro da função, bloqueando boolean, por exemplo
// O IGUAL depois de string é o default da função, ou seja, se você usar useState(123) vai dar erro pq o default é string mas useState("olá") vai funcionar
// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string

function useState<S extends numOrStr = string>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S){
    state = newState
  }

  return { getState, setState }
}

const newState = useState<number>()

newState.setState(1)
console.log(newState.getState())
// newState.setState("olá") // agora isso não funciona mais, pois já defini que o useState é number