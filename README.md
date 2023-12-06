# Note-Taker-Express
The purpose of this challenge was to create a command-line application in node using the inquirer package. This program was designed to allow users to create a logo 300 x 200px logo that is saved as a svg file. The application prompts the user to select a color and shape, provide text for the logo. There will also be a test file supported by jest to insure that the application functions as expected. The project demonstrated the use of node to create a program written in Javascript. 

The acceptance criteria were as follows: 

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

All criteria were met and the program functions as expected. 

I know how to utilize the node environment to create a program using dynamic Javascript. There were helpful error messages in the terminal to direct progress. The inquirer and jest documentation were utilized to created the desired outcome. There were many questions about the render aspect of the application. Initially the shape classes contained extraneous properties, color was the only one needed. Furthermore setting points along the x and y axis for each shape type was complicated and then applying those attributes for each class took some time to figure out. Configuring the tests to work took some trial and error, but ultimately the application was completed as expected. The recurring issue of needing to organize code so that it can be read and debugged is vitally important. Previous eureka moments were just as valuable here - reformatting code, implementing clear naming convention, and notating often.  I am still working to make this a natural part of the build process. 

## Usage

The js file can be used to understand the dynamic code that supports the application. A link to the deployed program is included below, for your convenience. 
https://drive.google.com/file/d/1NbK17EybQA4E1m2bWwJpXZdhQsKrB1E-/view

## Credits
The project was completed with help from the course materials and assistance from Bootcamp tutor, Erik Hirsch.

## License

MIT License
Copyright (c) [2023] [Amber Watson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).