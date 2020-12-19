function numberScrews(toolboxes) {
  var sum = 0;
  for(i = 0; i<=toolboxes; i++) {
    sum+=i;
  }
  return sum;
}

function findNumber(n) {
  var number = n;
  while(number>=10000) {
    number = Math.floor(number/2);
  }
  return number;
}

function cutCorners(cuts) {
 var num = 4;
  for(i = 1; i<=cuts; i++) {
    num = num*2;
  }
  return num;
} 

console.log(numberScrews(3));
console.log(numberScrews(5));
console.log(numberScrews(0));
console.log(numberScrews(1));
console.log(cutCorners(0));
console.log(cutCorners(1));
console.log(cutCorners(2));
console.log(cutCorners(3));

console.log(findNumber(18271391826548128124612817201282658389127236412910328136138129127462541728912731291247124871249124712361291247151724729128326172491248719284719824618724619256138758723650871268530123659801703585761203984765018375018237501283501726305891723058917203895612038512385709182375091273598127359812735897131829375098));

function bacteriaTime(b) {
  var bacteria = b;
  var seconds = 0;
  while(b>0) {
    if(b*.75>200) {
      seconds+=1;
      b = b*0.5;
    }
    else {
      seconds+=1;
      b+=-200;
      b = 2*b;
    }
  }
  return seconds;
}

console.log(bacteriaTime(900));
console.log(bacteriaTime(200));
console.log(bacteriaTime(1648));

function numSteps(steps) {
  if(steps===0) {
    return 1;
  }
  if(steps===1) {
    return 2;
  }
  var num = 0;
  var firstNum = 1;
  var secNum = 2;
  var n = 1;
  while(n<steps) {
    var temp = secNum;
    secNum = secNum + firstNum;
    firstNum = temp;
    n+=1;
  }
  return secNum;
}

console.log(numSteps(0));
console.log(numSteps(1));
console.log(numSteps(2));
console.log(numSteps(3));
console.log(numSteps(4));

console.log(findNumber(182713918265481281246128172012826583891272364129103281361381291274625417289127312912471248712491247123612912471517247291283261724912487192847198246187246192561387587236508712685301236598017035857612039847650183750182375012835017263058917230589172038956120385123857091823750912735981273598127358971318293750981237509823475098234750827340160318465083460186308516238757610238641928734601782365098127356089123640981263508917432089563280745164328057613209857613409857892369187360751630984712089365012837508912375081237651780345618273740871364508712340891236587071273058123));