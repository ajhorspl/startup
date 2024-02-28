I learned that github can be pretty useful in tracking changes of code. I wish I would've learned how to use it much sooner. I know I am already signed in on my Mac, but I wan't to sign out and then sign in again and work on becoming more comfortable with Git.

1/19/2024

Our server is running two services, our startup and simon. We will be making the Simon gain ourselves to understand and gain the skills to build out startup

2/5/2024
This assignment wasn't too bad. A lot of it was just following the syntax provided from Simon and the W3 schools website https://www.w3schools.com/html/

I wish we had gone over other stuff like javascript a little bit before this so I could better understand the integration of it. Right now I just have text placeholders until the time is ready to implement the rest of my application.

2/26/24 Midterm Notes

Web Server Startup
Technology stack:
The technology stack is the collection of technologies used to create your web application.
HTTPS, TLS, and web certificates
HTTP: non-secure hypertext transport protocol
HTTPS: secure hypertext transport protocol
The Console
A bunch of commands are found here
Hypertext Markup Language
Also known as HTML
Provides the foundational structure that all web applications are built on.
<p> is a paragraph element
Single quotes or double quotes can be used to delimit attribute values
Ex: <p id="hello" class="greeting">Hello world</p>
Hyperlinks: <a href="https://byu.edu">Go to the Y</a>
Table of common elements
By default web servers display the file names “index.html”
HTML media elements
External media can come from a  domain (you need to provide the full web address including the protocol)
The can come from a subdirectory
Ex: <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
You can include audio: <audio controls src="testAudio.mp3"></audio>
Video: 
<video controls width="300" crossorigin="anonymous">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
Internal media can be created using svg and canvas
Cascading Style Sheets (CSS)
CSS Selectors
CSS Declarations
CSS Fonts
You can import fonts in two ways:


CSS Animations:
Uses @keyframes 
Responsive design
Modern web applications need to run on a bunch of different devices: laptops, phones, tablets, etc
Discuesses float, media queries, a little bit of grid and flexbox
CSS Grid
Grid is used when you want to display a group of child elements in a responsive grid. 
CSS Flexbox
Flex is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes.
JavaScript
Introduction
Console
Used for debugging
Adding JavaScript to HTML
You can insert JavaScript into HTML by either directly including it in the HTML within the context of a <script> element, or by using the src attribute of the script element to reference an external JavaScript file.
Ex of referencing an external file: <script src="javascript.js"></script>
Onclick is an event listener for different DOM events that call the code contained in the attribute’s value. 
JavaScript type and construct
Variables are declared using let or const. 
Variables don’t have to have a type declared before being used.
You can get unexpected results when dealing with the equality (==) operator. Use (===) as strictly equals to get results you would expect.
JavaScript string
Strings are a primitive type in JavaScript
The are specified by a ‘, or “, or `
Functions
To declare a function, use the keyword function
JavaScript arrow function
JavaScript array
JSON
JavaScript Object Notation
Proved a simple and effective way to share and store data
JSON is encode in UTF-8
You can convert to and from JavaScript using JSON.parse and JSON.stringify
JSON cannot represent the JavaScript undefined object and will subsequently get dropped when converting from JavaScript to JSON
JavaScript object and classes
The properties of an object can be referenced with a dor (obj.prop) or bracket notation obj[‘prop’]
Scope
Global: Visible to all code
Module: Visible to all code running in a module
Function: Visible within a function
Block: visible within a block of code delimited by curly braces
Using the keyword var to declare a variable ignores block scope
