//We are going to make a program! eFarmony! 
//We will start with making animals, then we will add more complex functions to match the animals! 

// Object

// 1.Create a variable, name it 'animal', and assign it an object literal.


// 2.With Dot Notation, add a property called username and assign it a value. Ensure that your username property exists in animal by inspecting it in the console.


// 3.With Bracket Notation, add a property called tagline and give it a value. Check that your property exists in the animal object by inspecting it in the console.


// 4.Create a variable called noises and assign it an empty array []. Add the noises array to your object. Inspect your handiwork! Your object should look something like this: { username: 'DaffyDuck', tagline: 'Yippeee!', noises: [] }

//Loops

// 1. Loop through the properties of your animal object. Count everytime it loops to keep track of the number of properties on your object.


// 2. Write an if/else statement in your loop: If the key is username, console.log('Hi my name is ' + ___) //fill in with object's username value. If the key is tagline, console.log('I like to say ' + ___) //fill in with object's tagline value.


//Question: What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?


//Arrays 

// 1.Create a variable called noiseArray and assign it to an array literal. Place at least one element in the array.


// 2. Add a noise to the beginning of the noiseArray (with code!).


// 3. Add another noise to the end of the noiseArray (with code!).


// 4. Using Bracket Notation, add another noise to the end. Inspect the noiseArray.


// 5. Console log the length of the array. Comment out the last index of the array and how it is different than the length. 


// 6. Put the noiseArray inside the animal object on the noises property. Your result should look like this: { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze'] }


//A collection is an array of objects.


// 7. Create a variable called animals and set it equal to an empty array. Note that this variable is animals (plural) while the variable in the Animal User Model of the Object Exercises is animal (singular).


// 8. Using any method you prefer, add your animal from the Object Exercises to the animals array.


// 9. Create a variable called quackers and assign it to this example object: { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }.


// 10. Add quackers to the animals array using a different method than before. Inspect your animals array to ensure you have two objects inside.


// 11. Create two more animal objects and add them to your animals array. They should have these properties and your choice of values: username (with a string value), tagline (with a string value), noises (with an array of values). Check the length property of your array. It should give you 4.


//Nested Data

// 1. Create an array for the list of friends' usernames called friends.


// 2. Using your animals array, add two usernames to friends. Ensure that you are just putting the username value, not the entire object. (Be careful not to use a destructive method like pop() that will remove the whole value from the animals array.


// 3. Inspect your friends data structure. What does it look like?


// 4. Create a Relationships object (Imagine now that we have more than one kind of relationship in our app, we have friends and then we have romantic matches. Let's create an object to organize these different relationships!) Create a variable called relationships assign it to an empty object.


// 5. Add your friends data structure to the relationships object. Inspect your object. What is it's "length"?


//6. Create a variable called matches and assign it to an empty array.Add the matches array to the relationships object. It should look like this:relationships = { friends: ['duck', 'camel'], matches: []}


// 7. Using the relationships object, add at at least one username to matches. Hint: the matches array is now nested inside the relationships object! Inspect your object. Is the matches array now populated with some lucky animal?


// 8. Loop through your animals collection, adding the relationships object to each animal object. Name the property relationships. Note: it is ok that these are all the same relationship object.


//Functions

// 1. Write a constructor function, AnimalCreator that returns a single animal object. The constructor function has 4 parameters: username, species, tagline, and noises. The animal object should have at least 5 properties: username, species, noises, tagline, and friends. The values should all be strings except noises and friends, which are arrays.


// 2. Write a function, addFriend that takes an animal object (like the one returned from the AnimalCreator function) and adds another animal object as a friend.


//3. Change your addFriend function to only add the username of the friend, not the whole object.


//4. Create a new myFarm collection of at least 3 animal objects. Give them some friends using addFriend, too!


//5. Create a function, addMatchesArray, that takes a farm (array of animal objects) and adds a new property to each animal object called matches that is an empty array. Hint: you will need a loop.


// 6.  Create a function, giveMatches, that takes a farm collection (aka an array of animal objects) that already has a matches property. It selects a name from the friends array and adds it to the matches array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.

