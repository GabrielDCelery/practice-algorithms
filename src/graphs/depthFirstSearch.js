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

  depthFirstSearch(final = []) {
    const { name, children } = this;
    final.push(name);

    children.forEach(child => {
      return child.depthFirstSearch(final);
    });

    return final;
  }
}

// Do not edit the line below.
exports.Node = Node;
