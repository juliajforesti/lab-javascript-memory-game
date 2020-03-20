class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i >= 1; i -= 1) {
      let j = Math.round(Math.random() * i)
      let aux = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = aux

    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2
  }
}