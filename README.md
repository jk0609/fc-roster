# Free Company Roster (Week 4 Advanced JS Project)

#### By Jonathon Kang

## Description

Exercise in Angular and Firebase integration. The app is a roster manager for a clan of players (aka a free company or FC) in the online game Final Fantasy 14. Players can be viewed as a list, added, updated and delete. Players can also be filtered by their team roles to help with setting up specific team compositions for game events.

## Prerequisites
* Node.js with NPM
* Angular 2

## Setup/Installation Requirements
1. Clone the directory to your local machine and navigate to project root directory.
2. Open your Node.JS terminal and run $ npm install.
3. Run $ ng serve to initiate the directory and take it live at localhost:4200.

## Technologies Used

* HTML/CSS
* Bootstrap
* Javascript/Node.JS
* Angular 2
* Firebase

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
