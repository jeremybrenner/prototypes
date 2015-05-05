// 3. Make a `Radio` constructor that takes in an `ownerName` and a `signalType` ("AM" or "FM"). 
//   * Add a `setStation` method to your radio that allows the following ranges for a `station` property:
//     * `535` to `1705` for "AM".
//     * `88` to `108` for "FM".
//   * Add a `listen` method that returns the following:
//     * `"distorted music"` for "AM".
//     * `"clear music"` for "FM".


function Radio(ownerName,signalType){
	this.name = ownerName
	this.signal = signalType
}

Radio.prototype.setStation = function(channel){
    if(this.signal === 'AM'){
        if(channel >= 535 && channel <= 1705){
            this.station = channel;
        } else {
            return("Please enter a valid AM station from 535 to 1705")
        }
        
    } else if(this.signal === 'FM'){
        if(channel >= 88 && channel <= 108){
            this.station = channel;
        } else{
            return("Please enter a valid FM station from 88 to 108")
        }
    }
}

Radio.prototype.listen = function(){
    if(this.signalType === 'AM'){
        return("*distorted music*");
    } else {
        return("*clear music*");
    }
}
