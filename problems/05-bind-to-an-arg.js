function bindToAnArg(func, arg) {
    // to be able to call this function many times
    return function(...args) {
      return func(arg, ...args);
    }
}

function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());        // => I spy a tree
console.log(spyTree("car"));   // => I spy a tree

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());         // => I spy a car
console.log(spyCar("potato")); // => I spy a car

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
