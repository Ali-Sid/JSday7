// Exercises: Level 1
// 1. Declare a function fullName and it print out your full name.
function fName(){
    console.log('My full name is Ali Siddiqui')
}
fName() // My full name is Ali Siddiqui


// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}
console.log(fullName('Ali', 'Siddiqui')) // Ali Siddiqui

// 3. Declare a function addNumbers and it takes two parameters and it returns sum.

function addNumbers(numOne, numTwo){
    let sum = numOne + numTwo
    return sum
}
console.log(addNumbers(4,3)) // 7

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width){
    let area = length * width
    return area
}
console.log(`The area of rectangle is ${areaOfRectangle(10,5)}`) // The area of rectangle is 50

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(5, 3)) // 16

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height){
    let volume = length * width * height
    return volume
}

console.log(volumeOfRectPrism(5, 3, 10)) // 150

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r){
    let area = Math.PI * r * r // or you can declare a new variable by the name as pi and store the value as 3.14 eg: const pi = 3.14
    return area
}
console.log(areaOfCircle(5)) // 78.53981633974483

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r){
    let circumference = 2 * Math.PI * r
    return circumference
}
console.log(circumOfCircle(5)) // 31.41592653589793

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityOfSubs(mass, volume){
    let density = mass / volume
    return density
}

console.log(densityOfSubs(10, 2)) // 5

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// speed = tot dis / tot time

function totalDist(distance, time) {
    let speed = distance / time // distance in meters and time in seconds
    return speed
}
console.log(`The speed of a moving object is ${totalDist(10, 6)} meters per second.`) // The speed of a moving object is 1.6666666666666667 meters per second.

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weightOfSubs = (mass, gravity = 9.81) => {
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubs(100)) // 981  (9.81 is the gravity at the surface of earth) here, we have given only 1 parameter, so it will consider the default value of the gravity parameter
console.log(weightOfSubs(50, 1.62)) // 81 (1.62 is the gravity at the surface of moon)

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = oC => {
    const oF = (oC * 9/5) + 32
    return oF
}
console.log(convertCelsiusToFahrenheit(32)) // 89.6

/* 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
const bodyMassIndex = (weight, height) => {
    const bmi = weight / (height * height) // weight is in kg and height is in meter square
    let category

    if(bmi < 18.5) {
        category = 'Underweight'
    } else if(bmi >= 18.5 && bmi <= 24.9){
        category = 'Normal weight'
    } else if(bmi > 25 && bmi <= 29.9){
        category = 'Overweight'
    } else {
        category = 'Obese'
    }

    return [bmi.toFixed(2), category]

}

const result = bodyMassIndex(75, 1.8)
const bmi = result[0]
const category = result[1]

console.log(`Your bmi is ${bmi} and ${category}`) // Your bmi is 23.15 and Normal weight

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
/*
const checkSeason = () => {
    const month = prompt("Enter a month:")
    switch (month) {
        case "December":
        case "January":
        case "February":
            return "Winter"
        case "March":
        case "April":
        case "May":
            return "Spring"
        case "June":
        case "July":
        case "August":
            return "Summer"
        case "September":
        case "October":
        case "November":
            return "Autumn"
    
        default:
            return "Invalid month"
    }

}
alert(`The season is ${checkSeason()}`) // The season is Winter
*/

// or
 const checkSeason = month => {

    switch (month) {
        case "December":
        case "January":
        case "February":
            return "Winter"
        case "March":
        case "April":
        case "May":
            return "Spring"
        case "June":
        case "July":
        case "August":
            return "Summer"
        case "September":
        case "October":
        case "November":
            return "Autumn"
    
        default:
            return "Invalid month"
    }

 }

 console.log('The season is: ' + checkSeason("February")) // The season is: Winter

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (a, b, c) => {
    let max = a
    if(b > max){
        max = b
    }
    if(c > max){
        max = c
    }
    return max
}

console.log(findMax(0, 10, 5)) // 10
console.log(findMax(0, -10, -2)) // 0

// Exercises: Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c) => {
    return -c / (a + b) // y = -c / (a + b)
// If both a and b are not zero, the function calculates the value of the linear equation using the formula -c / (a + b). This expression gives the value of the y coordinate for any point on the line, given the x coordinate. Finally, the function returns the calculated value.
}
console.log(solveLinEquation(4, 5, 6)) // -0.6666666666666666
console.log(solveLinEquation(4, 5, 6).toFixed(2)) //-0.67

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
const solveQuadEquation = (a, b, c) => {

    const delta = b * b - 4 * a * c
    if(delta < 0){
        return null
    }
    else if(delta === 0){
        return [-b/(2*a)]
    } else {
        return [-b + Math.sqrt(delta)/(2*a), -b - Math.sqrt(delta)/(2*a)]
    }
}

console.log(solveQuadEquation()) // [ NaN, NaN ]
console.log(solveQuadEquation(1, 4, 4)) // [ -2 ]
console.log(solveQuadEquation(1, -1, -2)) //[ 2.5, -0.5 ]
console.log(solveQuadEquation(1, 7, 12)) // [ -6.5, -7.5 ]
console.log(solveQuadEquation(1, 0, -4)) // [ 2, -2 ]
console.log(solveQuadEquation(1, -1, 0)) // [ 1.5, 0.5 ]

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
    const printArray = []
    for(let i=0; i<arr.length; i++){
        printArray.push(arr[i])
    }
    return printArray
}

const myArray = [1,2,3,4,5]
console.log(printArray(myArray)) // [ 1, 2, 3, 4, 5 ]

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
    const now = new Date

    console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`)
}

showDateTime() // 28/2/2023 18:39

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
    const a = x
    x = y
    y = a
    console.log(`After swapping, the value of x is ${x} and y is ${y}`)
}

swapValues(3, 4) // After swapping, the value of x is 4 and y is 3
swapValues(4, 5) // After swapping, the value of x is 5 and y is 4

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    const reverseArray = []
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}
console.log(reverseArray([1, 2, 3, 4, 5])) // [ 5, 4, 3, 2, 1 ]
console.log(reverseArray(['A', 'B', 'C'])) // [ 'C', 'B', 'A' ]

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
    const capitalizedarray = []
    for(let i=0; i<arr.length; i++){
        capitalizedarray.push(arr[i].toUpperCase())
    }
    return capitalizedarray
}
console.log(capitalizeArray(['apple', 'orange', 'grapes', 'banana'])) // [ 'APPLE', 'ORANGE', 'GRAPES', 'BANANA' ]

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

const addItem = (arr, item) => {
    arr.push(item)
    return arr
}

const newItem = [1, 2, 3, 4, 5]
const anotherItem = 6
console.log(addItem(newItem, anotherItem)) // [ 1, 2, 3, 4, 5, 6 ]

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (index, arr) => {
    arr.splice(index, 1)
    return arr
}

const fruitArray = ['Apple', 'Banana', 'Grapes', 'Mango', 'Strawberry']
console.log(removeItem(2, fruitArray)) // [ 'Apple', 'Banana', 'Mango', 'Strawberry' ]

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
    let sum = 0
    for(let i=0; i<=number; i++){
        sum += i
    }
    return sum
}

console.log(sumOfNumbers(10)) // 55

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

const sumOfOdds = num => {
    let sum = 0
    for(let i=0; i<=num; i++){
        if(i % 2 !== 0){
            sum += i
        }
    } return sum
}

console.log(sumOfOdds(20)) // 100

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

const sumOfEven = num => {
    let sum = 0
    for(let i=0; i<=num; i++){
        if(i % 2 === 0){
            sum += i
        }
    } return sum
}

console.log(sumOfEven(20)) // 110

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(num) {
    let oddNum = 0, evenNum = 0
    for(let i=0; i<=num; i++){
        if(i % 2 === 0){
            evenNum++
        }
        else {
            oddNum++
        }
    } return `The number of odds are ${oddNum}\nThe number of evens are ${evenNum}`
}

console.log(evensAndOdds(100))
/*
The number of odds are 50
The number of evens are 51
*/

// 14. Write a function which takes any number of arguments and return the sum of the arguments

const sumOfArguments = (...args) => {
    let sum = 0
    for(const element of args){
        sum += element
    }
    return sum
}

console.log(sumOfArguments(1,2,3)) // 6
console.log(sumOfArguments(1,2,3,4)) // 10

// 15. Write a function which generates a randomUserIp.

const randIp = () => {
    const ip = []
    for(let i=0; i<4; i++){
        ip.push(Math.floor(Math.random() * 256))
    }
    return ip.join('.')
}

console.log(randIp()) // 238.161.139.72

// 16. Write a function which generates a randomMacAddress

const randomMacAddress = () => {
    const hexDigit = '0123456789abcdef'
    let mac = ''
    for(let i=0; i<6; i++){
        let randomHexDigit = hexDigit[Math.floor(Math.random() * 16)]
        let anotherRandHexDigit = hexDigit[Math.floor(Math.random() * 16)]
        mac += randomHexDigit + anotherRandHexDigit

        if(i < 5) {
            mac += ":"
        }
    }
    return mac
}

console.log(randomMacAddress()) // 7e:6c:0d:9c:a7:ad

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
    const hexDigit = '0123456789abcdef'
    let hex = ''
    for(let i=0; i<6; i++){
        let randHexDigit = hexDigit[Math.floor(Math.random() * 16)]
        hex += randHexDigit
    }
    return hex
}

console.log(`#${randomHexaNumberGenerator()}`) // #ec00d3

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

const userIdGenerator = () => {
    const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let id = ''
    for(let i=0; i<7; i++) {
        id += char.charAt(Math.floor(Math.random() * char.length))
    }
    return id
}

console.log(userIdGenerator()) // DLZZ9jQ

// Exercise: Level 3

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    let noOfChar = parseInt(prompt('Enter the no. of characters:')) // 5
    let noOfIds = parseInt(prompt('Enter no. of IDs to be generated:'))  // 3
    const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const ids = []
    
    for(let i=0; i<noOfIds; i++){
        let id = ''
        for(let j=0; j<noOfChar; j++){
            id += char.charAt(Math.floor(Math.random() * char.length))
        }
        ids.push(id)
    }

    return ids

}

console.log(userIdGeneratedByUser()) // ['dqytw', 'fVGol', 'zKOpd']

// 2. Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

console.log(rgbColorGenerator()) // rgb(122, 222, 183)

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = () => {
    const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const hexArray = []
    for(let i=0; i<6; i++) {
        hexArray.push(char.charAt(Math.floor(Math.random() * char.length)))
    }
    return hexArray.join('')
}

console.log(`[#${arrayOfHexaColors()}]`) // [#4zyR6o]

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const arrayOfRgb = [`rgb(${r}, ${g}, ${b})`]

    return arrayOfRgb
}

console.log(arrayOfRgbColors()) // [ 'rgb(163, 156, 6)' ]

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = hex => {
    const hexRegex = /^[0-9A-Fa-f]{6}$/ // /^[0-9A-Fa-f]{6}$/ is a regular expression (regex) that matches a string containing exactly 6 hexadecimal characters.

    const r = parseInt(hex.slice(1,3), 16)
    const g = parseInt(hex.slice(3,5), 16)
    const b = parseInt(hex.slice(5,7), 16)

    return `rgb(${r}, ${g}, ${b})`
}

console.log(convertHexaToRgb('#a3e12f')) // rgb(163, 225, 47)

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = rgb => {
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    /*
    /rgb\((\d+),\s*(\d+),\s*(\d+)\)/ is a regular expression pattern that matches a string containing an RGB color in the format rgb(r, g, b) where r, g, and b are integers representing the values of the red, green, and blue components of the color respectively.

/rgb\( matches the literal string "rgb(".

(\d+) matches one or more digits and captures them in a group. This group represents the value of the red component of the color.

, matches a comma followed by optional whitespace.

\s* matches zero or more whitespace characters.

(\d+) matches one or more digits and captures them in a group. This group represents the value of the green component of the color.

, matches a comma followed by optional whitespace.

\s* matches zero or more whitespace characters.

(\d+) matches one or more digits and captures them in a group. This group represents the value of the blue component of the color.

\) matches the closing parenthesis of the "rgb()" string.
*/
    const match = rgb.match(regex)

    // Converting rgb to hexa
    let hex = '#'
    for(let i=1; i<=3; i++){
        hex += parseInt(match[i]).toString(16).padStart(2, '0')
    }

    return hex
}

console.log(convertRgbToHexa('rgb(163, 156, 6)')) // #a39c06

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(colorType, numColors) {
    const colors = []

    for(let i=0; i<numColors; i++){
        if(colorType === "hex"){
        let hex = "#"
        for(let j=0; j<6; j++){
            hex += Math.floor(Math.random() * 16).toString(16)
        }
        colors.push(hex)
    } else if(colorType === "rgb"){

        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        colors.push(`rgb(${r}, ${g}, ${b})`)

    } else {
        console.log('Invalid color type')
    }

    }

    return colors

}

console.log(generateColors("hex", 1)) // [ '#36d1fd' ]
console.log(generateColors("rgb", 3)) // [ 'rgb(30, 163, 0)', 'rgb(10, 189, 57)', 'rgb(10, 239, 117)' ]

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

const shuffleArray = arr => {

    let random, tempVal
    for(let i=arr.length - 1; i>0; i--){
        random = Math.floor(Math.random() * (i+1))
        tempVal = arr[i]
        arr[i] = arr[random] // The function swaps the value at index i with the value at index random. To do this, it first stores the value at index i in the tempVal variable. It then sets the value at index i to the value at index random, and sets the value at index random to tempVal. This effectively swaps the two values in the array.
        arr[random] = tempVal // This is called as the Fisher-Yates shuffle algorithm. It's a simple and effective way to shuffle an array.
    }
    return arr
}

const newArr = [1, 2, 3, 4, 5]
console.log(shuffleArray(newArr)) // [ 2, 5, 3, 1, 4 ]

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(wholeNum){

    let result = 1
    for(let i=wholeNum; i>1; i--){
        result *= i
    }
    return result
}

console.log(factorial(4)) // 24

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

const isEmpty = num => {
    if(num === null || num === undefined){
        return `${num}: It is empty`
    }
    if(num === 0 || num.length === 0){
        return `${num}: It is empty`
    }
    if(typeof num === "string" && num.trim() === ""){
        return `${num}: It is empty`
    }
    return `${num}: It is not empty`
}

console.log(isEmpty(14)) // 14: It is not empty
console.log(isEmpty()) // undefined: It is empty
console.log(isEmpty("")) // : It is empty

// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum(...args){
    let sum = 0
    for(let i=0; i<args.length; i++){
        sum += args[i]
    }
    return sum
}

console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1)) // 1
console.log(sum()) // 0

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

const sumOfArrayItems = arr => {
    let sum = 0
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){
            sum += arr[i]
        } else{
            return `The elements of ${arr} array are not all numbers`
        }
    }
    return sum
}

let newArray = [1,2,3,4,5,6,7,8,9,10]
console.log(sumOfArrayItems(newArray)) // 55

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr){
    let avg = 0
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number" && arr[i] !== 0){
            avg += arr[i]/arr.length
        } else{
            return `The element at index ${i} of array ${arr} is not a number`
        }
    } return avg
}

let avgOfArray = [1,"2",3,4,5]
console.log(average(avgOfArray)) // The element at index 1 of array 1,2,3,4,5 is not a number
let avgOfArray2 = [1,2,3]
console.log(average(avgOfArray2)) // 2

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

const modifyArray = arr => {

        if(arr.length >= 5){
            // arr[4] = prompt('Enter the item to be modified at 5th element:')
            arr[4] = 'Kiwi'
            return arr
        } else {
            return 'item not found'
        }
}

// let modNumArray = [1,2,3,4,5,6,7,8,9,10]
let modArray = ['Apple', 'Banana', 'Mango', 'Grapes', 'Water melon', 'Oranges']
let numArr = [1,2,3,4]
console.log(modifyArray(modArray))
console.log(modifyArray(numArr))
// console.log(modifyArray(modNumArray))
/*

[ 'Apple', 'Banana', 'Mango', 'Grapes', 'Kiwi', 'Oranges' ]

item not found

[
  1, 2, 3, 4,  0,
  6, 7, 8, 9, 10
]
*/

// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(num){
    if(num < 2){
        return `${num} is neither prime nor composite`
    }

    for(let i=2; i<Math.sqrt(num); i++){
        if(num % i === 0){
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

console.log(isPrime(11)) // 11 is a prime number

// 16. Write a functions which checks if all items are unique in the array.

const uniqueArr = (arr) => {
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) != i){
            return `All the items in the array ${arr} are not unique`
        }
    }
    return `All the items in the array ${arr} are unique`
}

console.log(uniqueArr([1,2,1,3])) // All the items in the array 1,2,1,3 are not unique
console.log(uniqueArr([1,2,3,4,5])) // All the items in the array 1,2,3,4,5 are unique

// 17. Write a function which checks if all the items of the array are the same data type.

const arrayType = arr => {
    if(arr.length === 0){
        return true
    }
    const datatype = typeof arr[0]

    for(let i=0; i<arr.length; i++){
        if(typeof arr[i] !== datatype){
            return false
        }
    }
    return true
}

console.log(arrayType([1,2,3,4])) // true
console.log(arrayType(['Apple', 'Mango', true, 10])) // false

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (varName) => {
    let validChar = /^[a-zA-Z0-9$_]*$/
    if(!varName.charAt(0).match(/^[a-zA-Z0-9$_]/)){
        return false
    }

    for(let i=1; i<varName.length; i++){
        if(!varName.charAt(i).match(validChar)){
            return false
        }
    }
    return true
}

console.log(isValidVariable('hello_world')) // true
console.log(isValidVariable('hey@Hey')) // false

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

const sevenRandNum = () => {
    const randArray = []

    while(randArray.length < 7){
        let randNum = Math.floor(Math.random() * 10)
        if(!randArray.includes(randNum)) {
            randArray.push(randNum)
        }
    }
    return randArray
}

console.log(sevenRandNum())
/*
[
  1, 9, 3, 7,
  5, 6, 8
]
*/

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

const reverseCountries = revCountries =>{
    const counArr = []
    for(let i=revCountries.length; i>0; i--){
        counArr.push(i) == revCountries[i]
    }
    return counArr
}

console.log(reverseCountries([1,2,3,4,5])) // [ 5, 4, 3, 2, 1 ]
