// boolean (true / false)
let isOpen: boolean
isOpen = false
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = 'foo'
message = "foo"
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 1
total = 1.5
total = 0xff0

// array (type[])
let items: string[]
items = ["foo", "bar"]

let values: Array<number>
values = [1,2,3]

// object
let objeto: object
objeto = {
  hair: "brown",
  isMan: true
}

// tuple (array que já sei quantos são e quais tipos são)
let title: [number, string]
title = [total, message]

// enum (key / value)
enum colors {
  white = '#fff',
  black = '000'
}

// any
let coisa: any
coisa = isOpen
coisa = message
coisa = total
coisa = values
coisa = title
coisa = colors

// void
function logger(): void{
  console.log(message)
}

// null | undefined
type bla = string | undefined

// never
function error(): never {
  throw new Error("error")
}