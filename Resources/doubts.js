function Doubts(){
	this.doubts = new Array();	
}; 

Doubts.prototype.addDoubt = function(doubt) {
	positionToAdd = this.getSize();
    this.doubts[positionToAdd] = doubt;
};

Doubts.prototype.alreadyIsAnElement = function(element){
	for (var i=0; i < this.doubts.length; i++) {
		if (this.doubts[i].toLowerCase() == element.toLowerCase())
			return true;  
	};
	return false;
}

Doubts.prototype.getDoubt = function(doubtPos) {	
    return this.doubts[doubtPos];
};

Doubts.prototype.getSize = function() {
	return this.doubts.length;    
};

Doubts.prototype.guessADoubt = function(){
	var vectorPos = Math.floor(Math.random() * this.getSize());
	return this.doubts[vectorPos];
}
