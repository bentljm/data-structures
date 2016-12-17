var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(key, value) {

  var index = getIndexBelowMaxForKey(key, this._limit);

  if (this._storage.get(index) === undefined) {

    var bucket = [];

    bucket[0] = [key, value];

    this._storage.set(index, bucket);

  } else {

    var bucket = this._storage.get(index);

    for (var i = 0; i < bucket.length; i++) {

      var tuple = bucket[i];

      if (tuple[0] === key) {

        tuple[1] = value;

      } else {

        bucket.push([key, value]);

      }

    }

  }

};

HashTable.prototype.retrieve = function(key) {

  var index = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];

    if (tuple[0] === key) {

      return tuple[1];

    }

  }

  return undefined;

};

HashTable.prototype.remove = function(key) {

  var index = getIndexBelowMaxForKey(key, this._limit);

  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {

    var tuple = bucket[i];

    if (tuple[0] === key) {

      bucket.splice(i, 1);

      return undefined;

    }

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


