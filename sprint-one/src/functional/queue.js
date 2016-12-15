var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  someInstance.enqueue = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    var popped = storage['0'];
    var keys = Object.keys(storage);
    for (var i = 0; i < keys.length; i++) {
      storage[i] = storage[keys[i + 1]];
    }
    length--;

    if (length < 0) {
      length = 0;
    }
    return popped;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};

