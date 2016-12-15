var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
  };

  someInstance.pop = function() {
    var key = length - 1;
    var popped = storage[key];
    delete storage[key];
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
