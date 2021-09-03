// @Component
// @Selector
// @useState("bla")

// Factory é uma função que retorna a criação do nosso decorator
// function logger(prefix: string) {
//   return (target) => {
//     console.log(`${prefix} - ${target}`)
//   }
// }
// @logger("awesome")
// class Foo {}

// Decorator é uma função como qualquer outra, a diferença é que ela recebe parâmetros por default e retorna alguma coisa
// target é o constructor
// function log(target) {
//   console.log(target)
// }
// @log
// class Foo {}


// ===================== Class decorator ===================== //
function setAPIVersion(apiVersion: string){
  return(constructor: any) => {
    return class extends constructor {
      version = apiVersion
    }
  }
}

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API())

// ===================== Property decorator ===================== //
function minLength(length: number){
  return (target: any, key: string) => { // pode ser string | symbol
    console.log(target, key)
    let val = target[key]
    
    const getter = () => val

    const setter = (value: string) => {
      if (value.length < length) console.log(`Error: você não pode criar ${key} menor que ${length}`)
      else val = value
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    })
  }
}

class Movie {
  // fazer validação - se for menor que 5 - manda error
  @minLength(5)
  title: string

  constructor(title: string){
    this.title = title
  }
}

const movie1 = new Movie("Int")
const movie2 = new Movie("Interstellar")
console.log(movie1.title)
console.log(movie2.title)

// ===================== Method decorator ===================== //
function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target, key, descriptor)
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any) {
      console.log(`Esperando ${ms}...`)
      setTimeout(() => {
        originalMethod.apply(this, args)
      }, ms);

      return descriptor
    }
  }
}

class Greeter {
  greeting: string

  constructor(greeting: string) {
    this.greeting = greeting
  }

  // esperar um tempo e aí vai rodar o método (ms)
  @delay(2000)
  // poderia usar isso para um debounce aplicando num search para não ficar buscando toda hora na api a cada dígito e sim a cada x milissegundos
  greet(){
    console.log(`Hello! ${this.greeting}`)
  }
}

const pessoinha = new Greeter("Pessoinha!")
pessoinha.greet()

// ===================== Parameter decorator ===================== //

// ===================== Acessor decorator ===================== //

