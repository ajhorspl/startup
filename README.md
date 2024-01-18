# Startup Specification

## Elevator Pitch
Imagine this: Hollywood. Flashing Lights. Fancy cars. Ryan Reynolds walking down your red carpet. Spontaneous Mint Mobile Ad... It's premier night at your film festival and streaming service in the home of the stars. Your theater is packed and all is well. The movies come and go, but then you see Ryan Reynolds walk away with his head down at the end of the night. You run to ask him if he's alright and he replies: "My film never made it on screen, and I can't even watch it on the app 😞". How could this happen!?! 

We know! You run your entire business from a set of ever growing Google Spreadsheets.

Well how do you fix it...?

First off, give Ryan Reynolds a hug he definitely needs it. And then subscribe to [insert cool name for web application here]! This web application allows you to track and manage your films, their associated information, and filmmakers through an interactive database. Easily add, remove, export and condense your spreadsheets into a user friendly application!

## Design

The design for the website and its pages can be found at the following [link](https://ninjamock.com/s/29L9TLx).

## Key Features
- Secure login
- Ability to add and store information about content and its creators to a database through the website
- Interact with the information that the user has uploaded
- Export a CSV (download it) with necessary information

## Technology

- HTML
    - Use HTML to structure the application. There will be six pages. A Login, Dashboard, Content View, Payee View, Add Content, and Add Payee page.

- CSS 
    - Make the application look good

- JavaScript
    - Provides the login, updating the database, pulling from the database calls

- DB
    - Stores the users, content information, and payee information. Can't use the application without signing in.

- WebSocket
    - Updates the statistics displayed on the dashboard based on the information uploaded to the database.

##### Side Note

A small film festival and streaming service reached out to me to make an application like this for them. I attempted to use my CS240 skills to put together a Java application and it did not turn out the greatest. My intentions for this class are to learn and make something that is presentable and functioning. Any feedback would be greatly appreciated :)