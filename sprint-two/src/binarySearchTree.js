var BinarySearchTree = function(value) {
  var parent = {};
  parent.value = value;
  parent.left = null;
  parent.right = null;

  _.extend(parent, master);

  return parent;

};

//create object to store all methods
//parent, 0,1,2 children. Each branch, right is greater than, left is less than
var master = {};

//insert a value into a binary search tree (this === parent)
master.insert = function(value) {
  // create new node
  var currentNode = BinarySearchTree(value);
  //is value greater or less than parent value
  var traverse = function (node) {
    //if value is greater than parent.value, traverse down right branch
    if (currentNode.value > node.value) {
      if (!node.right) {
        node.right = currentNode;
      } else {
        traverse(node.right);
      }
    //if value is less than parent.value, transver down left branch
    } else if (currentNode.value < node.value) {
      if (!node.left) {
        node.left = currentNode;
      } else {
        traverse(node.left);
      }
    }
  };

  traverse(this);

};

//determine whether a value is in a binary search tree tree
master.contains = function(value) {
  //traverse thru branches
  var traverse = function (node) {
    //check if node is undefined, the value is not contained in the tree
    if (!node) {
      return false;
    }
    //if value equals node.value, return true
    if (value === node.value) {

      return true;
      //if value is greater than parent.value, traverse down right branch
    } else if (value > node.value) {

      return traverse(node.right);
    //if value is less than parent.value, traverse down left branch
    } else if (value < node.value) {

      return traverse(node.left);

    }

  };

  return traverse(this);

};

//determine depth first log (lol)
master.depthFirstLog = function(callback) {

  callback(this.value);

  if (this.left) {

    this.left.depthFirstLog(callback);

  }
  if (this.right) {

    this.right.depthFirstLog(callback);

  }


};




/*
 * Complexity: What is the time complexity of the above functions?
 */
