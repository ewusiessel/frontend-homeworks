/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

/* WRITE YOUR CODE HERE */
const firstFiveNumbers = [1,2,3,4,5,]


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */
const myName = {
    name: "Ebenezer",
    surname: "Ewusi-Essel",
    email: "ewusiessel@striveschool.eu",
    address: "London UK",
    age: 35,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

/* WRITE YOUR CODE HERE */
myName.driversLicense =  true
console.log(myName.driversLicense)
console.log(myName)

/* EXERCISE 4
Remove from the previously created object the age property.
*/

/* WRITE YOUR CODE HERE */
delete myName.age
console.log(myName)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* WRITE YOUR CODE HERE */
const myName2 = {
    name: "Ebenezer",
    surname: "Ewusi-Essel",
    email: "ewusiessel@gmail.eu",
    address: "London UK",
    age: 35,
}

verifyIfSame = myName2.email === myName.email
console.log(verifyIfSame)

/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/

/* WRITE YOUR CODE HERE */

const totalShoppingCart = "200"

const discountApplied = totalShoppingCart > 50 ? "eligible for free shipping" : "costs 10" 
console.log(discountApplied)

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR CODE HERE */

const totalShoppingCart = "200"

blackFridayDiscount = totalShoppingCart * 20 / 100 

const totalCost = blackFridayDiscount > 50 ? "eligible for free shipping" : "costs 10" 

console.log(totalCost)



/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

/* WRITE YOUR CODE HERE */

let car1 = {
    brand: "Aston Martin",
    model: "Vanquis",
    licensePlate:"th5GoodL1fe",
}
console.log(car1)

let car2 = Object.assign({}, car1);
car2.licensePlate = "Soke4udo";

console.log(car2)

let car3 = Object.assign({}, car1);
car3.licensePlate = "G987hyww6";

console.log(car3)

let car4 = Object.assign({}, car1);
car4.licensePlate = "56rdeSEgt";

console.log(car4)

let car5 = Object.assign({}, car1);
car5.licensePlate = "98IUYTdo";

console.log(car5)


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */
const carsForRent = ["Aston Martin", "Toyota", "Mazda", "Lambrogini", "Ferrari"]


/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR CODE HERE */

carsForRent.pop("Ferrari")
carsForRent.shift("Aston Martin")

console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

/* WRITE YOUR CODE HERE */


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */


/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/