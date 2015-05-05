// 1. Make a `Dice` constructor that takes a `numberOfSides`. Add a method called `roll` that randomly returns a number from `1` up to the `numberOfSides`.

//   * Modify your `roll` method to record the returned side in a `lastRoll` property.
function Dice(numberOfSides) {
  this.roll = function(){
  this.lastRoll = Math.floor(Math.random()*numberOfSides);
    return this.lastRoll;
  }
}

// var roll1 = new Dice(6);
// d.roll1();
