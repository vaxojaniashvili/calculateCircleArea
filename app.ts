function calculateRectangleArea(rectangle: { width: any; height: any; }) {
    return rectangle.width * rectangle.height;
  }
  
  function calculateRectanglePerimeter(rectangle: { width: any; height: any; }) {
    return 2 * (rectangle.width + rectangle.height);
  }
  
  function calculateCircleArea(circle: { radius: any; }) {
    return Math.PI * Math.pow(circle.radius, 2);
  }
  
  function calculateCirclePerimeter(circle: { radius: any; }) {
    return 2 * Math.PI * circle.radius;
  }
  
  // Independent Functions
  
  function addNumbers(a: number, b: number) {
    return a + b;
  }
  
  function multiplyNumbers(a: number, b: number) {
    return a * b;
  }
  
  function capitalizeString(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function filterEvenNumbers(numbers: any[]) {
    return numbers.filter((num: number) => num % 2 === 0);
  }
  
  function findMax(numbers: number[]) {
    return Math.max(...numbers);
  }
  
  function isPalindrome(str: string) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }
  
  function calculateFactorial(n: number) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  }
  
  // Test Cases
  
  // სასურველია გავაკეთოთ Rectangle და Circle კლაზები და დავუმატოთ შესაბამისი მეთოდები.
  
  const rectangle = { width: 5, height: 8 };
  const circle = { radius: 3 };
  
  const rectangleArea = calculateRectangleArea(rectangle);
  const rectanglePerimeter = calculateRectanglePerimeter(rectangle);
  
  const circleArea = calculateCircleArea(circle);
  const circlePerimeter = calculateCirclePerimeter(circle);
  
  console.log(
    `Rectangle Area: ${rectangleArea}, Perimeter: ${rectanglePerimeter}`
  );
  console.log(`Circle Area: ${circleArea}, Perimeter: ${circlePerimeter}`);
  
  const sumResult = addNumbers(5, 3);
  const multiplicationResult = multiplyNumbers(4, 7);
  const capitalizedString = capitalizeString("javascript is fun");
  const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  
  console.log(`Sum: ${sumResult}`);
  console.log(`Multiplication: ${multiplicationResult}`);
  console.log(`Capitalized String: ${capitalizedString}`);
  console.log(`Even Numbers: ${evenNumbers}`);
  
  const maxNumber = findMax([23, 56, 12, 89, 43]);
  const isPalindromeResult = isPalindrome("A man, a plan, a canal, Panama");
  const factorialResult = calculateFactorial(5);
  
  console.log(`Max Number: ${maxNumber}`);
  console.log(`Is Palindrome: ${isPalindromeResult}`);
  console.log(`Factorial: ${factorialResult}`);