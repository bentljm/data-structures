var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var deleted = list.head.value;

    list.head = list.head.next;

    if (list.head === null) {
      list.tail = null;
    }

    return deleted;
  };

  list.contains = function(target) {
    var node = list.head;

    while (node !== null) {

      if (node.value === target) {
        return true;
      }

      node = node.next;
    }
    return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */