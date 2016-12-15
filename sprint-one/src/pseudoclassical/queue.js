var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.someInstance.storage = {};
  this.someInstance.length = 0;
};

Queue.prototype.enqueue = function(value) {
  this.someInstance.storage[this.someInstance.length] = value;
  this.someInstance.length++;
};

Queue.prototype.dequeue = function() {
  var popped = this.someInstance.storage['0'];
  var keys = Object.keys(this.someInstance.storage);

  for (var i = 0; i < keys.length; i++) {
    this.someInstance.storage[i] = this.someInstance.storage[keys[i + 1]];
  }
  this.someInstance.length--;

  if (this.someInstance.length < 0) {
    this.someInstance.length = 0;
  }

  return popped;
};

Queue.prototype.size = function() {
  return this.someInstance.length;

};

var test = new Queue();


