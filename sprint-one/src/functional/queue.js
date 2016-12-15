var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.length = 0;

  someInstance.enqueue = function(value) {
    someInstance.storage[someInstance.length] = value;
    someInstance.length++;
  };

  someInstance.dequeue = function() {
    var popped = someInstance.storage['0'];
    var keys = Object.keys(someInstance.storage);
    for (var i = 0; i < keys.length; i++) {
      someInstance.storage[i] = someInstance.storage[keys[i + 1]];
    }
    someInstance.length--;

    if (someInstance.length < 0) {
      someInstance.length = 0;
    }
    return popped;
  };

  someInstance.size = function() {
    return someInstance.length;
  };

  return someInstance;
};

