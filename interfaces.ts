interface Game {
  title: string
  description: string
  readonly genre: string
  platform?: string[]
  getSimilars?: (title: string) => void
}

const tlou: Game = {
  title: "The Last Of Us",
  description: "The best game in the world",
  genre: "Action",
  platform: ["PS2", "PS3"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
  }
}

console.log(tlou)

if (tlou.getSimilars) tlou.getSimilars(tlou.title)

interface DLC extends Game {
  originalGame: Game,
  newContent: string[]
}

const leftbehind: DLC = {
  title: "The Last Of Us - Left Behind",
  description: "You play as Ellie before the original game",
  genre: "Action",
  platform: ["PS4"],
  originalGame: tlou,
  newContent: ["3 hours story", "new characters"]
}

class CreateGame implements Game {
  title: string
  description: string
  genre: string

  constructor(t: string, d: string, g: string){
    this.title = t
    this.description = d
    this.genre = g
  }
}