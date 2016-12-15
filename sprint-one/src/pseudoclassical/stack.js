var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.someInstance = {};
  this.someInstance.storage = {};
  this.someInstance.length = 0;
};

Stack.prototype.push = function(value) {
  this.someInstance.storage[this.someInstance.length] = value;
  this.someInstance.length++;
};

Stack.prototype.pop = function() {
  var key = this.someInstance.length - 1;
  var popped = this.someInstance.storage[key];

  this.someInstance.length--;

  if (this.someInstance.length < 0) {
    this.someInstance.length = 0;
  }
  return popped;
};

Stack.prototype.size = function() {
  return this.someInstance.length;
};

var test = new Stack();






