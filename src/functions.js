/**
* the \@param notation indicates an input paramater for a function. For example
* @param {string} foobar - indicates the function should accept a string
* and it should be called foobar, for example function(foobar){}
* \@return is the value that should be returned
*/

/**
* Write a function called `uselessFunction`.
* It should accept no arguments.
* It should return the null value.
* @return {null} - 'useless'.
*/

//your code here

function uselessFunction() {
	var useless = null;
	return useless;
}

//end your code

var bar = 'not a function';
var barType = typeof bar;

/**
* Assign the above variable 'bar' to an anonymous function with the following
* properites.
* @param {float[]} doubleArray - an array of floating point numbers.
* The function should multiply every number in the array by 2 (this should
* change the content of the array).
* @return {boolean} - true if the operation was sucessful, false otherwise.
* This should return false if any value in the array cannot be doubled.
*/

//your code here

bar = function doubleArray(floatA) {
	var success = true;

	for (var i=0; i<floatA.length; i++) {
	
		if (typeof floatA[i] === "number") {
			floatA[i] *= 2; // if value is a number type, then it will be multiplied by 2
		}
		else {
			success = false;
			break;
			// if value is not a number type, then it will not be multiplied by 2
			// the loop will also end 
		}
	
	}

	return success;
}


//end your code

/**
* Creates a new GitLog
* @class
* @property {string} hash - the hash of the commit
* @property {Date} date - the date of the commit as a JS Date object
* @property {string} message - the commit message
*/
function GitLog(hash, date, message) {
    this.hash = hash;
    this.date = date;
    this.message = message;
}

/**
* Create a function called parseGit to parse Git commit logs
* The logs will be generated by the following command
* git log --pretty=format:"%h %ad \"%s\"" --date=rfc
* The result looks like this
* 3782618 Wed, 7 Jan 2015 21:42:26 -0800 "Initial commit"
* |hash | |             date           | |   message    |
* There will always be a space between the hash and date and between the date
* and the first " of the commit message.
*
* You will covert these into GitLog objects with the following properties:
*
*
* @param {array.<string>} logArray - an array of Git commit messages of the
* above
* format.
* @return {array.<GitLog>} - return an array GitLog instances
*/

//your code here

function parseGit(logArray) {

	var gitLogArray = []; // new array of GitLog objects
	var hash, date, message;

	for (var i=0; i<logArray.length; i++) {
		hash = logArray[i].slice(0,7);
		dates = new Date(logArray[i].slice(8,38));
		message = logArray[i].slice(40, logArray[i].length-1);
		// slice breaks apart the logs so they can be designated to proper object properties

		var newObject = new GitLog(hash, dates, message);
		// creates new GitLog object
		
		gitLogArray[i] = newObject;
		// object gets added to the gitlog array
	}

	return gitLogArray;

}

//end your code
