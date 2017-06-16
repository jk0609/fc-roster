# Free Company Roster (Week 4 Advanced JS Project)

#### By Jonathon Kang

## Description

Exercise in Angular and Firebase integration. The app is a roster manager for a clan of players (aka a free company or FC) in the online game Final Fantasy 14. Players can be viewed as a list, added, updated and delete. Players can also be filtered by their team roles to help with setting up specific team compositions for game events.

## Prerequisites
* Node.js with NPM
* Angular 2

## Setup/Installation Requirement ##
1. Clone the directory to your local machine.
2. To use this app, you need a Firebase database.
  * Go to https://firebase.google.com/ and use your Google account (or sign up for one) to create a Firebase account.
  * Create a new project and click on 'Add Firebase to your web app'.
  * Create a file named api-key.ts in the src/app folder. Type 'export var masterFirebaseConfig = {};' and copy your API config info from Firebase into the brackets.
3. Open your Node.JS terminal and navigate to project root directory. Run $ npm install.
4. Run $ ng serve to initiate the directory and take it live at localhost:4200. You will first need to navigate to 'Admin' in the footer and create players before you can use the other functions of the app. 

## Technologies Used

* HTML/CSS
* Bootstrap
* Javascript/Node.JS
* Angular 2
* Firebase Config Key

### License

Copyright 2017 Jonathon Kang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Planning
1. Configuration/dependencies
  * Node.js/npm
  * Angular 2
  * Angular-Bootstrap

2. Layout
  * Animal model with attributes:
    1. Name(string)
    2. Rank(string)
    3. Role(string)
    4. Character(string)
    5. ImageURL(string)
  * new-player component with form and button with click function that creates a new Player class object and adds it to Firebase table of existing players.
  * update-player component that contains ngModel relationships with existing player attributes to update them dynamically.
  * player-list component that lists all current player objects and contains buttons to trigger the update component. List is based off of Firebase table.
  * Role filter pipes to only display players in specific roles.

3. Future Changes
* Additional styling
* Team building section of the app to put together team of 8 players.
* Schedule attribute to dynamically show only players that are available at the designated time.
* Allow players to have multiple roles.
