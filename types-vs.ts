 // Type Alias

 // definição
 type TGame = {
   title: string
 }

 type TDLC = {
   extra: string
 }

 // intersection | extends | extensão
 type TGameCollection = TGame & TDLC & { content: boolean }

 // implements
 type TCreateGame implements TGameCollection {}

 // declarar função
 type TgetSimilars = (title: string) => void

 // ============ Diferenças ============ //
// permite declarar tipos primitivos (number, string, etc)
type TId = string | number

// permite declarar e validar tuplas normalmente
type TTupla = [number, number]
[1, 2] as TTupla

// permite apenas uma declaração por escopo
type TJQuery = { a: string }
type TJQuery = { b: string }

// ============ Quando usar ============ //

// Maioria das vezes, começa usando esse e se precisar extender, usa interface
// React - Props com types são melhores
// Consistência (types no mesmo escopo: ajuda a não criar duas sem querer, pois vai acusar erro)
