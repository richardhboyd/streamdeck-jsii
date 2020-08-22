const { openStreamDeck } = require('elgato-stream-deck')

export class HelloJsii {
    public sayHello(name: string) {
    const myStreamDeck = openStreamDeck()
    myStreamDeck.fillColor(4, 255, 0, 0)
    myStreamDeck.fillColor(5, 0, 255, 0)
    myStreamDeck.clearAllKeys()
    myStreamDeck.resetToLogo()
    myStreamDeck.close()

    return `Hello, ${name}!`;
    }
  }