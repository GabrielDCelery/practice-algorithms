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

  breadthFirstSearch(final = []) {
    const queue = [this];

    while (0 < queue.length) {
      const { name, children } = queue.shift();
      final.push(name);
      children.forEach(child => {
        queue.push(child);
      });
    }

    return final;
  }
}

// Do not edit the line below.
exports.Node = Node;
