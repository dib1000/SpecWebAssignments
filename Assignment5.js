function sumSoFar(a){
  var sum = 0;
  for(var i = 0; i< a.length; i++) {
    sum+=a[i];
    console.log(sum);
  }
}

console.log(sumSoFar([2, 4, 6, 72, 1])
)

function wordMultiple(a) {
  var ans = new Object();
  for(var i = 0; i<a.length; i++) {
    if(ans[a[i]]===false) {
      ans[a[i]] = true;
    }
    else {
      ans[a[i]] = false;
    }
  }
  return ans;
}

console.log(wordMultiple(["a", "b", "a", "c", "b"]));
console.log(wordMultiple(["c", "b", "a"]));
console.log(wordMultiple(["c", "c", "c", "c"]));

function wordLen(a) {
  var ans = new Object();
  for(var i = 0; i<a.length; i++) {
    if(ans[a[i]]) {
      ans[a[i]]+=0;
    }
    else {
      ans[a[i]] = a[i].length;
    }
  }
  return ans;
}

console.log(wordLen(["a", "bb", "a", "bb"]))
console.log(wordLen(["this", "and", "that", "and"]) )
console.log(wordLen(["code", "code", "code", "bug"]) )

function palidrome(str) {
  var half = Math.floor(str.length/2) + str.length % 2;
  for(var i = 0; i<half; i++) {
    if(str.charAt(i)!=str.charAt(str.length-1-i)) {
      return false;
    }
  }
  return true;
}


console.log(palidrome("racecar"));
console.log(palidrome(""));
console.log(palidrome("f"));
console.log(palidrome("ff"));
console.log(palidrome("fe"));
console.log(palidrome("feek"));
console.log(allPalindrome(["racecar", "abcba", "aba"]));
console.log(allPalindrome(["tacocat","no","aba"]));
console.log(allPalindrome(["zyxwxyz", "zyxwwxyz"]));
console.log(allPalindrome(["","f"]));

function allPalindrome(a) {
  var sum = 0;
  for(var i = 0; i<a.length; i++) {
    if(palidrome(a[i])===true) {
      sum+=1
    }
  }
  return sum===a.length;
  }

var test = new Object();

function firstSwap(a) {
  var used = new Object();
  for(var i = 0; i<a.length; i++) {
    if(a[i].length>0) {
      var first = a[i].charAt(0);
      for(var j = i+1; j<a.length; j++) {
        if(a[j].length>0 && first===a[j].charAt(0) && !(used[first])) {
          used[first] = "storage";
          var storage = a[j];
          a[j] = a[i];
          a[i] = storage;
          continue;
        }
      }
    } 
  }
  return a;
}

console.log(firstSwap(["ab","ac"]));
console.log(firstSwap(["ax", "bx","", "cx", "cy", "by", "ay", "aaa", "azz"]));
console.log(firstSwap(["ax", "bx", "ay", "by", "ai", "aj", "bx", "by"]))
