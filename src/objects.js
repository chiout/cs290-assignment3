/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
  var objLit = {
  	type: 'Goldfish',
  	brand: 'Pepperidge Farm',
  	flavor: 'Cheddar',
  	count: 2000,
  }; // creates object literal

  return objLit; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here

function MessageLog() {
	this.user;
	this.storedRMessage;
	this.storedSMessages = []; // store up to 5 messages
	this.rCount = 0;
	this.sCount = 0;
	this.logMessage = function(messageText, direction) {
		if (direction === 1) {
			this.storedRMessage = messageText;
			this.rCount +=1;
		}
		else if (direction === 0) {
			if (this.storedSMessages.length < 6) {
				this.storedSMessages.splice(0,0,messageText);
				this.sCount +=1;
				// will continuously add messages to the front of the array
			}
			else {
				this.storedSMessages.pop(); // removes last element in array to keep array length at 5
				this.storedSMessages.splice(0,0,messageText); // adds to front of the array
				this.sCount += 1;
			}
		}
		else {
			return undefined;
		}	

	}
	this.getSentMessage = function(n) {
		return this.storedSMessages[n]; // returns any of the 5 stored messages
	}
	this.totalSent = function() {
		return this.sCount; // returns sent messages count
	}
	this.totalReceived = function () {
		return this.rCount; // returns received messages count
	}
 }



//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here

MessageLog.prototype.lastReceivedMessage = function () {
	return this.storedRMessage; // returns most recent received message
}

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog;
myLog.user = "BlackHatGuy";
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);



//end your code
