abstract class UserAccount {
  public name: string
  protected age: number

  constructor(name: string, age:number){
    this.name = name
    this.age = age
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string
  // readonly level: number
  level: number

  constructor(name: string, age: number, nickname: string, level: number) {
    // pega os valores da classe extendida/pai
    super(name, age)

    this.nickname = nickname
    this.level = level
  }

  get getLevel() {
    console.log("--------- GET ---------")
    return this.level
  }

  set setLevel(level: number){
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
  }
}

const john = new CharAccount("John", 45, "johnmaster", 45)

// const leo = new UserAccount("Leo", 30) abstract não permite criar objetos usando a classe direto mas permite que outras classes que extendam, permitam
const leo = new CharAccount("Leo", 30, "leo", 99)
console.log(leo)
leo.logDetails()
console.log(john)
// console.log(john.nickname) private não permite alterações nem leitura, apenas dentro da classe
// john.level = 80 readonly não permite alterações, apenas leitura
console.log(john.level)
john.logDetails()
john.logCharDetails()
john.setLevel = 99
console.log(john.getLevel)