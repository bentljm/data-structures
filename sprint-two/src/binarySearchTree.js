var BinarySearchTree = function(value) {
  var parent = {};
  parent.left = null;
  parent.right = null;
  parent.value = value;

  _.extend(parent, master);

  return parent;

};

//create object to store all our methods
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

//insert a value into a binary search tree (this === parent)
master.insert = function(value) {
  //
  var newChild = BinarySearchTree(value);

  if (newChild.value > this.value) {

    this.right = this;

  } else if (newChild.value < this.value) {

    this.left = this;

  }


};

//determine whether a value is in a binary search tree tree
master.contains = function() {



};

//determine depth first log (lol)
master.depthFirstLog = function() {



};




/*
 * Complexity: What is the time complexity of the above functions?
 */
