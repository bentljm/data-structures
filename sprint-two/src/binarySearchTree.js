var BinarySearchTree = function(value) {
  var parent = {};
  parent.left = null;
  parent.right = null;
  parent.value = value;

  _.extend(parent, master);

  return parent;

};

var master = {};

//           2 parent, has two children
//         /   \
//        3     7 parent/child
//       / \   / \
//            6
//
//
//
//


master.insert = function(value) {

  var newChild = BinarySearchTree(value);

  if (newChild.value > this.value) {

    this.right = this;

  } else if (newChild.value < this.value) {

    this.left = this;

  }


};

master.contains = function() {



};

master.depthFirstLog = function() {



};




/*
 * Complexity: What is the time complexity of the above functions?
 */
