# Rick and Morty Directory

* This application is a character tracker of several characters that appear in Rick and Morty. 


## Table of Contents



* [Depenencies](#Dependencies)

* [Goals](#Goals)

* [Challenges](#Challenges)

* [Touchups](#Touchups)

# Dependencies

* This application makes use of several dependencies.

* To access the dependencies of NPM, NPM will need to be initialized using NPM install

* This application also employs usage of react and react-dom and both should be installed using npx create-react-app

* This application as well uses the framework Bootstrap, however the index.html file should have those dependencies covered.

# Goals

* The main goal to be accomplished by this app is to allow a group of people to be easily viewed and sorted in a simple and manageable way.
* The page should load with a general view of of various key pieces of information about all the characters including their name, species, current status, and a stock image of how they appear.
* There should be basic functionality of the spans next to each column title allowing the user to sort the columns by ascending or descending alphabetical order.


# Challenges

* The first major challenge was just getting the ajax call to work properly within a react system. There's some small nuances that must be accounted for.
* dissecting the ajax call and appending it appropriately to the page in an aesthetically pleasing manner was also a challenge, but very satisfying to complete.
* The most difficult part was to come up with the logic as to how to allow the on click functionality to have the names rearrange in ascending and descending order.

# Things That Need Touch Ups

* The App.js currently contains one bulk file and needs to be modularized for better future troubleshooting

* Creating a slightly more polished UI wouldn't be a bad touch.

* Ideally the buttons would have some sort of float and onClick animation.

* Eventually, there would be a way to randomize which page or which span of characters are chosen from the Rick and Morty API to allow for more variety of characters. To start with, I wanted to make sure at a minimum all of the main characters were included. 