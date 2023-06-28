//Sum(1)(2)(3)(4)()


const Sum  = function (a) {
    return function (b) {
      if (b) {
        return Sum(a+b); // it takes an argument and return a function which again can take an argument.
      }
      return a; // it will keep on adding 1+2+3+4..
    }
  };



console.log(Sum(1))
console.log(Sum(1)(2))
console.log(Sum(1)(2)(3))
console.log(Sum(1)(2)(3)(4))
console.log(Sum(1)(2)(3)(4)());