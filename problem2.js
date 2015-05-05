// 2. Make a `Starship` constructor that takes a `model` and `ownerName`. 
//   * Give your `StarShip` a `setTopSpeed` method and a `getTopSpeed` method that let you change and read the `topSpeed`. *Assume `topSpeed` is just a number.*
//   * Give your `Starship` an `accelerateTo` method that sets `currentSpeed` to some number, unless that number is greater than its `topSpeed`.
 
 function Starship(model, ownerName){
 	
 	this.currentSpeed = 0;
 	this.topSpeed = 0;

 	this.setTopSpeed = function(increase) {
 		this.topSpeed += increase;
 		return this.topSpeed;
 	}

 	this.getTopSpeed = function(){
 		return this.topSpeed;
 	}
 
 	this.accelerateTo = function(accel){
 		if((this.currentSpeed + accel) <= this.topSpeed){
 			this.currentSpeed += accel;
 			return this.currentSpeed;
 		} else {
 			return("IM GIVIN IT ALL SHES GOT");
 		}
 	}
 }








 