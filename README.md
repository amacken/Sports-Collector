Project #2: Building Your First Full-Stack Application

Technical Requirements:
For this project, you will be making a full CRUD app using the technologies outlined below:

A working full-stack application, built by you, using Node.js, Mongoose, Express and JSX
Adhere to the MVC file structure: Models, Views, Controllers
At least one model with all 7 RESTful routes and full CRUD.
Be deployed online and accessible to the public via Heroku.


My app is call Sports-Collector and is a way for collectors of sports memorabilia to catalog their collection.  A link can be found here:

https://sports-collector.herokuapp.com/


Technologies and Approach:

The app was built using mainly JavaScript with some CSS styling as well. I used 7 controllers and models, 1 for each category on the app.  These were all written in JavaScript.  The controllers use the 7 RESTful routes (Index, New, Delete, Update, Create, Edit, and Show) while the models contain my Schemas for each controller.

Each category also has its own views folder which contains jsx files for the Edit, Index, New, and Show pages. 

All of the separate pages are styled and linked via a css file in my public folder.


Unsolved Problems and Future Goals:

Long term I would like to create a login/user authentication for the app so that each individual user could have their own personal collection catalog.  Another idea I ran out of time to implement would be a drop down on the homepage where the user could select the sport they want to enter.  From there, depending on the sport they selected, different categories would populate for them to enter.