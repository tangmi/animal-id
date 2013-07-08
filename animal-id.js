(function() {
	var _global = this;

	var uuid = require('node-uuid');

	var animals = require('./animals.json'),
		adjectives = require('./adjectives.json'),
		separator = '-';

	function useAnimals(arr) {
		if (arr instanceof Array) {
			animals = arr;
		} else {
			throw new Error('Parameter isn\'t an array!');
		}
	}

	function useAdjectives(arr) {
		if (arr instanceof Array) {
			adjectives = arr;
		} else {
			throw new Error('Parameter isn\'t an array!');
		}
	}

	function useSeparator(str) {
		if (typeof str !== 'string') {
			throw new Error('Parameter isn\'t a string!');
		} else {
			separator = str;
		}
	}

	function getId(prefix) {
		var output = [];
		if (typeof prefix === 'string') {
			output.push(prefix);
		}

		// pick adjective
		var adjectiveIndex = Math.floor(Math.random() * adjectives.length)
		output.push(adjectives[adjectiveIndex]);

		// pick animal
		var animalIndex = Math.floor(Math.random() * animals.length)
		output.push(animals[animalIndex]);

		return output.join(separator);
	}

	function getUuid(prefix) {
		return animal.getId(prefix) + separator + uuid.v4().replace(/\-/g, separator);
	}


	var animal = {};
	animal.useAnimals = useAnimals;
	animal.useAdjectives = useAdjectives;
	animal.useSeparator = useSeparator;
	animal.getId = getId;
	animal.getUuid = getUuid;

	// this bit is taken pretty straight much from
	// https://github.com/broofa/node-uuid/blob/master/uuid.js
	if (typeof define === 'function' && define.amd) {
		define(function() {
			return animal;
		});
	} else if (typeof(module) != 'undefined' && module.exports) {
		module.exports = animal;
	} else {
		var _previousRoot = _global.animal;
		animal.noConflict = function() {
			_global.animal = _previousRoot;
			return animal;
		};
		_global.animal = animal;
	}
}).call(this);