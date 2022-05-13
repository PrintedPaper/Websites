function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  var myRandom = randomRange(1, 10);
  console.log(myRandom)