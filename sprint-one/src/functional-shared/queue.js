var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.length = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  var popped = this.storage[0];
  var keys = Object.keys(this.storage);
  for (var i = 0; i < keys.length; i++) {
    this.storage[i] = this.storage[keys[i + 1]];
  }
  this.length--;

  if (this.length < 0) {
    this.length = 0;
  }
  return popped;
};

queueMethods.size = function() {
  return this.length;
};
