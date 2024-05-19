interface IPlayer {
  play(): void
}

class Player implements IPlayer {
  play() {
    console.log('play')
  }
}

class BuffDecorator implements IPlayer {
  constructor(private player: IPlayer) { }

  play() {
    console.log('buff')
    this.player.play()
  }
}

class DebuffDecorator implements IPlayer {
  constructor(private player: IPlayer) { }

  play() {
    console.log('debuff')
    this.player.play()
  }
}
describe('decorator', () => {
  it('should log', () => {
    let player = new Player()
    player = new BuffDecorator(player)
    player = new DebuffDecorator(player)
    player.play()
  })
})
