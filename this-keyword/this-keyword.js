// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: "basketball",
  players: [
    { name: "LeBron James", age: 31 },
    { name: "Kevin Durant", age: 28 }
  ],
  playerNames: function() {
    // YOUR CODE HERE
    let newA = [];
    for (let i = 0; i < this.players.length; i += 1) {
      newA.push(`${this.players[i].name} plays ${this.name}`);
    }
    return newA;
  }
};

// this.player[0].name = sport.players[0].name;

module.exports = sport;
