/*
Time complexity O(V + E) (vertecies, edges)
Space complexity O(V)
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    this.children.forEach(childNode => {
      return childNode.depthFirstSearch(array);
    });

    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
