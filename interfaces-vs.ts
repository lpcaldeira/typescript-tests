// Interfaces

// definição
interface IGame {
  title: string
}

interface IDLC {
  extra: string
}

// interseção | extends | extensão
interface IGameCollection extends IGame, IDLC {}

// implements
class ICreateGame implements IGameCollection {
  title: "title"
  extra: "extra"

  constructor(title: string, extra: string){
    this.title = "title"
    this.extra = "extra"
  }
}

// declarar função
interface IgetSimilars{
  (title: string): void
}

// ============ Diferenças ============ //

// não permite extensão de tipos primitivos (number, string, etc)
interface IId extends number {}

// permite declarar tuplas mas não valida
interface ITupla {
  0: number
  1: number
}
[1, 2, 3, 4] as ITupla

// permite a mesma declaração múltiplas vezes por escopo
interface IJQuery {
  a: string
}

interface IJQuery {
  b: string
}

const $: IJQuery = {
  a: "bla",
  b: "foo"
}

// ============ Quando usar ============ //

// Criar bibliotecas, usa interface porque é mais flexível
// Criando objetos/classes (POO)