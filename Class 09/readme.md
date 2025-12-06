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