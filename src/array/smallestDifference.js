/*
Time complexity O(N * log(N) + M * log(M))
Space complexity O(1)
*/

class SmallestDiffFinder {
  constructor() {
    this.arrayFirst = null;
    this.arraySecond = null;
    this.pointerFirst = 0;
    this.pointerSecond = 0;
    this.smallestDiff = Infinity;
    this.final = [null, null];
  }

  getCurrentDiff() {
    return Math.abs(this.getSecondPointerValue() - this.getFirstPointerValue());
  }

  getFirstPointerValue() {
    return this.arrayFirst[this.pointerFirst];
  }

  getSecondPointerValue() {
    return this.arraySecond[this.pointerSecond];
  }

  hasFirstPointerReachedEndOfArray() {
    return this.pointerFirst === this.arrayFirst.length - 1;
  }

  hasSecondPointerReachedEndOfArray() {
    return this.pointerSecond === this.arraySecond.length - 1;
  }

  moveFirstPointerToRightByOne() {
    this.pointerFirst += 1;
  }

  moveSecondPointerToRightByOne() {
    this.pointerSecond += 1;
  }

  adjustResultIfCurrentDiffIsSmallerThanPreviousDiff() {
    const currentDiff = this.getCurrentDiff();

    if (this.smallestDiff <= currentDiff) {
      return;
    }

    this.smallestDiff = currentDiff;
    this.final = [this.getFirstPointerValue(), this.getSecondPointerValue()];
  }

  initialize(arrayFirst, arraySecond) {
    arrayFirst = arrayFirst.sort((a, b) => a - b);
    arraySecond = arraySecond.sort((a, b) => a - b);
    this.arrayFirst = arrayFirst;
    this.arraySecond = arraySecond;
    this.pointerFirst = 0;
    this.pointerSecond = 0;
    this.smallestDiff = this.getCurrentDiff();
    this.final = [this.getFirstPointerValue(), this.getSecondPointerValue()];
  }

  findSmallestDiffPair(arrayFirst, arraySecond) {
    this.initialize(arrayFirst, arraySecond);

    while (true) {
      if (this.getFirstPointerValue() === this.getSecondPointerValue()) {
        return this.final;
      }

      if (
        this.hasFirstPointerReachedEndOfArray() &&
        this.hasSecondPointerReachedEndOfArray()
      ) {
        return this.final;
      }

      if (this.getFirstPointerValue() < this.getSecondPointerValue()) {
        this.hasFirstPointerReachedEndOfArray()
          ? this.moveSecondPointerToRightByOne()
          : this.moveFirstPointerToRightByOne();
        this.adjustResultIfCurrentDiffIsSmallerThanPreviousDiff();

        continue;
      }

      if (this.getFirstPointerValue() > this.getSecondPointerValue()) {
        this.hasSecondPointerReachedEndOfArray()
          ? this.moveFirstPointerToRightByOne()
          : this.moveSecondPointerToRightByOne();
        this.adjustResultIfCurrentDiffIsSmallerThanPreviousDiff();

        continue;
      }
    }
  }
}

module.exports = (arrayFirst, arraySecond) => {
  return new SmallestDiffFinder().findSmallestDiffPair(arrayFirst, arraySecond);
};
