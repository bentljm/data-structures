var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  this.storage[item] = item;

};

setPrototype.contains = function(item) {

  if (item in this.storage) {

    return true;

  } else {

    return false;

  }

};

setPrototype.remove = function(item) {

  if (item in this.storage) {

    delete this.storage[item];

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
