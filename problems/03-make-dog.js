class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet = () => new Dog("Jet");

	/**
	 * Add two instance methods: a. changeName(newName) - set the name to the newName
	 * b. speak(word) - returns ${name} says ${word}
	 */

	changeName = (newName) => {
		this.name = newName;
		return this.name;
	}

	speak = (word) => {
		return `${this.name} says ${word}`;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
