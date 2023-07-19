// Using recursion
// Create a function that calculates the factorial of a number
// factorial(3); => 3*2*1 = 6
// factorial(5); => 5*4*3*2*1 = 120
function factorialRecursively(n) {
  if (n == 0) return 1;
  else return n * factorialRecursively(n - 1);
}
// TODO: your work goes here
