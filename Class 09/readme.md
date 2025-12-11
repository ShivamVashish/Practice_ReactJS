<!-- Closure
A lexical scope means in JavaScript, an inner function can access the variables of its outer function,
but the outer function cannot access the variables of the inner function. This behavior is called lexical scope.
-->
<!-- function outer() {
  let a = 10;   // outer variable
  function inner() {
    console.log(a);  // inner → outer (YES)
  }
  inner();
  console.log(b);  // outer → inner (NO ❌)
}
function outer() {
  let a = 10;   // outer variable
  function inner() {
    let b = 20; // inner variable
    console.log(a);  // inner → outer (YES)
  }
  inner();
  console.log(b);  // ❌ ERROR: b is not defined
}
outer(); -->


<!-- Password Generator Main Project  -->


<!-- Closure  
let b = 10;

function greet(){
    let a = 20;
    console.log(a);
    console.log(b);
}
greet();
console.log(a);

Note=> Function apne parent (outer) scope ke variables ko access kar sakta hai, lekin parent scope function ke local variables ko access nahi kar sakta. Kyuki local variables sirf function ke scope ke andar hi available hote hain.

Imp => jb Parent function apne child function ko return krta h to jo child function hota h apne parent function ke variables ke reference ko store krke rkhta h jise wo future m usko access kbhi bhi kr skte h



UseCallback = > useCallback ek function ko yaad rakh leta hai (memoize karta hai)
taki React har render me us function ko dobara create na kare.
Iska use tab hota hai jab:
Har render pe function fir se create ho raha ho
Aur wo function kisi child component ko props me ja raha ho
Jisse unneccessary re-renders ho rahe hon


setpassword,setcharacter,setnumber ye bhi ek bar hi create hote h or ye bhi store as a reference hi store hote h 