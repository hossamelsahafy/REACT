#!/usr/bin/node

// Create a Set to manage unique staff roles
const staffRoles = new Set(["Chef", "Waiter", "Manager"]);

// Add new roles to the Se
staffRoles.add('Host');
staffRoles.add('Barista');

console.log('Updated Staff Roles:', Array.from(staffRoles));

// Loop through the Set to display each role
console.log('Staff Roles List:');
staffRoles.forEach(role => console.log(role));

// Check if specific roles exist in the Set
console.log('Does the Set have a Chef?', staffRoles.has('Chef'));
console.log('Does the Set have a Dishwasher?', staffRoles.has('Dishwasher'));

// Remove a role from the Set
staffRoles.delete('Barista');

// Display the updated Set
console.log('Staff Roles After Removal:', Array.from(staffRoles));

// Display the total number of unique roles using the Set's size
console.log('Total Number of Unique Roles:', staffRoles.size);

// Create a Map to store restaurant status
const restaurantStatus = new Map();

restaurantStatus.set('Opening Hours', 10); // Opening at 10 AM
restaurantStatus.set('Closing Hours', 23); // Closing at 11 PM
restaurantStatus.set('Available Dishes', ['Pasta', 'Pizza', 'Salad', 'Burger']);
restaurantStatus.set('Staff', new Set(['Chef', 'Waiter', 'Manager', 'Host']));

// Retrieve and display values from the Map
console.log('Restaurant Opening Hours:', restaurantStatus.get('Opening Hours'));
console.log('Restaurant Closing Hours:', restaurantStatus.get('Closing Hours'));
console.log('Available Dishes:', restaurantStatus.get('Available Dishes'));
console.log('Staff:', Array.from(restaurantStatus.get('Staff')));

const isOpen = (time) => {
    const openingTime = restaurantStatus.get('Opening Hours');
    const closingTime = restaurantStatus.get('Closing Hours');
    return time >= openingTime && time <= closingTime;
  };

  // Check if the restaurant is open at 2 PM (which is 14 in 24-hour format)
console.log('Is the restaurant open at 2:00 PM?', isOpen(14));

// Check if the restaurant is open at 8 AM
console.log('Is the restaurant open at 8:00 AM?', isOpen(8));

const dishes = restaurantStatus.get('Available Dishes');
const dishToRemove = 'Salad';
const updatedDishes = dishes.filter(dish => dish !== dishToRemove);
restaurantStatus.set('Available Dishes', updatedDishes);

// Display updated available dishes
console.log('Available Dishes After Removal:', restaurantStatus.get('Available Dishes'));

// Create a string representing the restaurant’s daily special announcement
let dailySpecial = "Today's special is Pizza";
console.log(dailySpecial);

// Convert the string to uppercase and display it
let toUpper = dailySpecial.toUpperCase();
console.log(toUpper);

// Replace a dish name in the string with another dish
let updatedAnnoun = dailySpecial.replace("Pizza", "Fish");
console.log(updatedAnnoun);

// Split the string into individual words and display them
let wordsArray = dailySpecial.split(" ");
console.log(wordsArray);

// Remove spaces from the string and display the result
let noSpacesString = wordsArray.join("");
console.log(noSpacesString);

// Join the split words back into a single string with hyphens instead of spaces
let hyphenatedString = wordsArray.join("-");
console.log(hyphenatedString);

// Customer Booking System with Closures and Event Listeners
const bookingTracker = () => {
    let bookingCount = 0;
    return () => {
        bookingCount += 1;
        return bookingCount;
    };
};

const trackBooking = bookingTracker();

// function that allows customers to book a table and display the booking details
const bookTable = (customerName) => {
    const bookingNumber = trackBooking();
    console.log(`Booking successful for ${customerName}. Booking Number: ${bookingNumber}`);
};

// Simulate bookings using the booking function and display the booking details
bookTable("John Doe");
bookTable("Jane Smith");
bookTable("Alice Johnson");

// Event listeners to bind a button click event to the booking function
document.getElementById("bookButton").addEventListener("click", () => {
    // Get the value from the input field
    const customerName = document.getElementById("name").value;
    
    // Check if the customerName is not empty
    if (customerName.trim() !== "") {
        bookTable(customerName);
    } else {
        console.log("Please enter a valid name.");
    }
});

// Create an array of customer names
const customerNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Use map to generate an array of customer greetings
const customerGreetings = customerNames.map(name => `Hello, ${name}!`);
console.log(customerGreetings);

// Use filter to find customers whose names start with a specific letter
const customersStartingWithC = customerNames.filter(name => name.startsWith('C'));
console.log(customersStartingWithC);

// Use reduce to calculate the total number of characters in all customer names
const totalCharacters = customerNames.reduce((total, name) => total + name.length, 0);
console.log(`Total number of characters in all customer names: ${totalCharacters}`);

const reversedCustomerNames = customerNames.slice().reverse(); // slice() to avoid mutating the original array
console.log(reversedCustomerNames);

(function() {
    const restaurantStatus = new Map()
        .set('Opening Hours', '10:00 AM')
        .set('Closing Hours', '11:00 PM')
        .set('Status', 'Open');

    console.log(`Welcome to our restaurant! We are currently ${restaurantStatus.get('Status')} from ${restaurantStatus.get('Opening Hours')} to ${restaurantStatus.get('Closing Hours')}.`);
})();
