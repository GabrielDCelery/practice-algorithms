const program = require('../src/graphs/breadthFirstSearch');
const { expect } = require('chai');

const test1 = new program.Node('A');
test1.addChild('B').addChild('C');
test1.children[0].addChild('D');

const test2 = new program.Node('A');
test2
  .addChild('B')
  .addChild('C')
  .addChild('D')
  .addChild('E');
test2.children[1].addChild('F');

const test3 = new program.Node('A');
test3.addChild('B');
test3.children[0].addChild('C');
test3.children[0].children[0].addChild('D').addChild('E');
test3.children[0].children[0].children[0].addChild('F');

const test4 = new program.Node('A');
test4
  .addChild('B')
  .addChild('C')
  .addChild('D');
test4.children[0].addChild('E').addChild('F');
test4.children[2].addChild('G').addChild('H');
test4.children[0].children[1].addChild('I').addChild('J');
test4.children[2].children[0].addChild('K');

const test5 = new program.Node('A');
test5
  .addChild('B')
  .addChild('C')
  .addChild('D')
  .addChild('L')
  .addChild('M');
test5.children[0]
  .addChild('E')
  .addChild('F')
  .addChild('O');
test5.children[1].addChild('P');
test5.children[2].addChild('G').addChild('H');
test5.children[0].children[0].addChild('Q').addChild('R');
test5.children[0].children[1].addChild('I').addChild('J');
test5.children[2].children[0].addChild('K');
test5.children[4]
  .addChild('S')
  .addChild('T')
  .addChild('U')
  .addChild('V');
test5.children[4].children[0].addChild('W').addChild('X');
test5.children[4].children[0].children[1].addChild('Y').addChild('Z');

describe('breadth first search', () => {
  it('Test Case #1', function() {
    expect(test1.breadthFirstSearch()).to.deep.equal(['A', 'B', 'C', 'D']);
  });

  it('Test Case #2', function() {
    expect(test2.breadthFirstSearch()).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ]);
  });

  it('Test Case #3', function() {
    expect(test3.breadthFirstSearch()).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ]);
  });

  it('Test Case #4', function() {
    expect(test4.breadthFirstSearch()).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K'
    ]);
  });

  it('Test Case #5', function() {
    expect(test5.breadthFirstSearch()).to.deep.equal([
      'A',
      'B',
      'C',
      'D',
      'L',
      'M',
      'E',
      'F',
      'O',
      'P',
      'G',
      'H',
      'S',
      'T',
      'U',
      'V',
      'Q',
      'R',
      'I',
      'J',
      'K',
      'W',
      'X',
      'Y',
      'Z'
    ]);
  });
});
