// Object Oriented JavaScript Exercises

// 1. Create an OO JavaScript "cheat sheet" that includes:

//     - an object literal for someone's full name
//     - a constructor function for creating multiple 				people's full names
//	   - create an instance of the object
//     - access the different object attributes and console 		log them

// 2. Create an object called `Multiplier` with two methods: `multiply` and `getCurrentValue`. `multiply` should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied. `getCurrentValue` should return the last answer returned from multiply.

// 3. Implement a constructor function that allows you to store strings that represent a Photo (file name and location). You should also create an Album object that can contain many Photo objects in its photos array. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Create instances of each object defined to prove that your object model works.

// 4. TO REVIEW TOGETHER: Create a Person object that stores first and last names. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function Person(fname, lname){
	this.fname = fname;
	this.lname = lname;
}

function Teacher(department){
	this.department = department;
	Person.apply(this, arguments);
}

function Student(major){
	this.major = major;
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();
Student.prototype = new Person();

function School(){
	this.students = [];
	this.teachers = [];
	this.addStudent = function(student){
		this.students.push(student);
	};
	this.addTeacher = function(teacher){
		this.teachers.push(teacher);
	};
}

var bobDole = new Teacher("spelling");

bobDole.fname = "Bob";
bobDole.lname = "Dole";

var bobMarley = new Student("Botany");

bobMarley.fname = "Bob";
bobMarley.lname = "Marley";

var NYCDA = new School();

NYCDA.addStudent(bobMarley);
NYCDA.addTeacher(bobDole);

var newTeacher = new Teacher("English");

bobMarley.major = "Gym";

