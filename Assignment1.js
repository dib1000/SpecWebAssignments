function Triangle(a,b,c) {
  if((a+b)<=c || (b+c)<=a || (c+a)<=b) {
    return false;
  }
    return true;
}

console.log(Triangle(10,10,10));
console.log(Triangle(5,5,10));
console.log(Triangle(10,5,5));
console.log(Triangle(5,10,5));
console.log(Triangle(11,12,10));
console.log(Triangle(12,10,11));
console.log(Triangle(10,11,12));

function isMultipleOfHundred(n) {
  if(n%100===0 || n%100===-0) {
    return (n + " is a multiple of 100");
  }
    return(n + " is not a multple of 100");
}
console.log(isMultipleOfHundred(1000));
console.log(isMultipleOfHundred(-1000));
console.log(isMultipleOfHundred(50));
console.log(isMultipleOfHundred(-50));
console.log(isMultipleOfHundred(250));
console.log(isMultipleOfHundred(-250));

function product(a,b,c) {
  if(a===b && a===c) {
    return 0;
  }
  var product = a*b*c;
  if(a===b || a===c) {
    return product/(a*a);
  }
  else if(b===c) {
    return product/(b*b);
  }
  return product;
}

console.log(product(5,1,2));
console.log(product(6,6,6));
console.log(product(1,-6,-6));
console.log(product(-6,1,-6));
console.log(product(-6,-6,1));

function ManureCounting(a,b,c,d) {
  var manure = [a,b,c,d];
  var sum = 0;
  for(var i = 0; i<manure.length; i++) {
    if(manure[i]>10) {
      break;
    }
    sum += manure[i];
  }
  return sum;
}
console.log(ManureCounting(5,6,7,8));
console.log(ManureCounting(1,11,1,2));
console.log(ManureCounting(11,6,7,8));
console.log(ManureCounting(5,6,11,8));
console.log(ManureCounting(5,6,7,11));

function createPartyBag(totalWeight, small, lollipops) {
  if(totalWeight>small+lollipops*5) {
    return -1;
  }
  var tw = totalWeight - totalWeight%5;
  if(tw<=lollipops*5) {
    return totalWeight%5;
  }
  return totalWeight - 5*lollipops;
}

console.log("party bag");
console.log(createPartyBag(9,4,2));
console.log(createPartyBag(20,4,1));
console.log(createPartyBag(18,9,3));
console.log(createPartyBag(550,50,100));