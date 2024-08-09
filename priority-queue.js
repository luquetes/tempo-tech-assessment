/**
 * A priority queue stores a list of items but each can have a numeric priority value.
 * Items with a higher priority are dequeued before items with a lower priority.
 * Implemented as a hash of arrays where the hash keys are priority values.
 */


// Consider using a class instead of a constructor function.
// Remove unused arguments.
function PriorityQueue(size) {
	this.store = {};	// keys are priorities, values are arrays of elements
	this.count = 0;
	// adds an item
	// priority must be an integer (higher value has higher priority)
	this.add = function(value, priority) {
		if (this.store[priority] == undefined)
			this.store[priority] = [];
		this.store[priority].push(value);
		this.count++;
	};
	// returns the oldest-added value with the highest priority
    // maintain consistency regarding casing when declaring variables and/or methods.
    // The purpose of this method is not quite clear. Refer to notes for more details.
	this.Pop = function() {
        // Make sure you use const and let when appropiate. Don't let variable declarations hanging!
		maxKey = Math.max(Object.keys(this.store));
		this.count--;
		return this.store[maxKey].shift();
	};
    // We don't really need this. Remove!
	this.length = function() {
		return this.count;
	}
}

// After transforming the constructor function to a class, make sure to move these methods within the class declaration!

PriorityQueue.prototype.get_all_priorities = function() {
	return Object.keys(this.store);
}


// iterates through all the queue elements in priority-then-FIFO order
// We don't really need this, plus its naming and syntax is super confusing. Check notes for further details.
PriorityQueue.prototype.forEach = function(callback) {
    // Make sure you use const and let when appropiate. Avoid using var!
	var keys = Object.keys(this.store).sort();
	for (var a = keys.length; a > 0; a--) {
		for (var b = 0; b < this.store[a].length; b++)
			callback(this.store[a][b]);
	}
}

// This can be tackled in a completely different way, as it wouldn't work as is.
// Check notes and the PriorityQueue.js file for reference!
PriorityQueue.prototype.changePriority = function(value, newPriority) {
    // Make sure you use const and let when appropiate. Avoid using var!
	var foundItem = false;
	this.store.forEach(function(bucket) {
		bucket.forEach(function(item, index) {
			if (item === value) {
				bucket.splice(index, 1);  // remove the item
				this.add(value, newPriority);
				foundItem = true;
				return false;  // early exit from forEach
			}
		});
		if (foundItem) return false;
	});
}