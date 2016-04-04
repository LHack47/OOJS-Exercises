//WELCOME! 
//Before you begin, take a good look at index.html
// You don't have to make any changes to that file, but you should be familiar with the structure of the file--especially its id's.

// Our first challenge is to display the current day, month and year in an HTML string, like this:
// <p>Today is <span id="todayDate">Oct. 6, 2015</span></p>

// 1. To begin, we need a variable to reference the current time when a user loads the page.
// Create a variable "today" as an instance of the Date object.

// You can read all about the Date object here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


// 2. Next we need the values for the current day, month and year.
// The Date object gives us a ton of methods to get the data we want.
// Create variables for the current date (day of the month, 1-31), current month (0-11) and current year (2015).
// Assign values for each by calling the following methods on the today variable:
// Date.getDate();
// Date.getMonth();
// Date.getFullYear();


// 3. Date.getMonth(); returns a number. We want a three-letter abbreviation for the month.
// Maybe we can get that from the Date object, but let's just make our own array and use the data we already have.
// Create a month names array using the new keyword and the Array() prototype object.
// Populate the array with three-letter string abbreviations for each month.

// 4. Now we have everything we need to create our HTML string. Use jQuery's .html() method.

//Check out the .html method here: http://api.jquery.com/html/

// 5. For this project, we are using the jQuery .datepicker(), which is actually part of the jQuery UI library.
// You can read more about it here: 
// Use jQuery to grab the element with an id of "datepicker" and call .datepicker() on it.
// Read more about the jQuery UI datepicker here:
// https://jqueryui.com/datepicker/

// 6. Now we need to create a function daysLeft()

// 7. daysLeft needs 4 local variables.

// You need to call datepicker's 'getDate' method (this is an example of closure) ...and then you have to call the Date() object's .getTime(); method on the whole thing:

var a = $( "#datepicker" ).datepicker('getDate').getTime();

// 8. Outside of the daysLeft() function, we need to call daysLeft() using jQuery's .on('change', ____) event handler.
// Implement the function so it logs the value of a every time you click the calendar.

// HINT:
// You may need to temporarily add a return a inside the daysLeft function in order for this to work.

// 9. For the second variable, you need to call getTime on your today variable

// 10. Now we need a variable to store the difference in days between today and the end date selected by the user.
// Basically, we need to subtract b from a


// 11. SPOILER ALERT!  If you've done it correctly, you will get a difference in milliseconds, which is not what we want.
// ...so we need one more variable to store a constant and we need to define it before we store the difference in days.
// That makes difference in days our FOURTH variable, so let's call our THIRD variable c. 
// c = hours per day * minutes per hour * seconds per minute * ms per sec
// Do the math and store the value.

// If all is well, you can console.log your difference in days variable and it will change depending on what date is clicked on the datepicker.

// 12. There is still a problem. We need the result to be an integer.
// Here is a link to the Math object:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// I bet you can figure out which method to call on your difference in days variable.
// It's one of the ones listed under Methods in the left column of the page linked above.


// 13. You are almost there!
// We need a variable where we can concatenate the integer value difference of days and display that in a concatenated HTML string.
// "You have ____ days left!"

$("#datepicker").on("change", function(){
	daysLeft();

// 14. Now, instead of console.log, let's update the HTML string every time the user clicks a date.
// Use jQuery to write the result string in the element with an id of 'result'


// UH-OH! We defined the variable inside daysLeft and we need the same data in our .on('change', function(){})
// 15. Define the variable globally (with the other var's at the top of the file) and leave your references alone.



