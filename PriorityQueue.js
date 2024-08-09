class PriorityQueue {
    constructor() {
        this.store = {};
        this.count = 0;
    }

    // adds an item
	// priority must be an integer (higher value has higher priority)
    add(value, priority) {
        if (!Number.isInteger(priority)) {
            throw new Error('Priority must be an integer.');
          }
        if (!this.store[priority]) {
            this.store[priority] = [];
        }
        this.store[priority].push(value);
        this.count++;
        return this.store;
    }

    // Should pop out an item?
    pop() {
        const maxKey = Math.max(Object.keys(this.store));
		this.count--;
		return this.store[maxKey].shift();
    }

    // Return all priorities.
    getAllPriorities() {
        return Object.keys(this.store);
    }

    // Both length and forEach have been removed since we don't need them anymore.

    // Changes the value of a given priority, based on a given new priority value.
    changePriority(value, newPriority) {
        const currentPriority = this.store[value];
        const destination = this.store[newPriority];

        if (!currentPriority) {
            throw new Error('The given priority does not exist');
        }
        if (destination) {
            throw new Error('There is already a priority in the desired new value');
        }

        const priorityExistingValues = [...currentPriority];
        delete this.store[value];
        this.store[newPriority] = priorityExistingValues;
        return this.store;
    }

}