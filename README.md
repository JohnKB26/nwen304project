# nwen304project

HOW TO USE

Register Function
To register an account go to Register an account tab. Username, Password and Password repeat are all required so you are unable to press submit until it is all filled up. Username must be unique because in our database I set a UNIQUE CONSTRAINT for the username so there is no multiple users with same username. Password and Confirm Password must match to be able to submit, if not you will recieve an alert danger with the message of the error ('Password do not match').
The client.query function of this is broken as I keep getting error connection to the database so it crashes my server.

Login Function
To login go to Login tab. Username and password are required, if you do not fill it up before submitting you will get an alert danger with message ('missing credential'). The client.query function of this is broken as I keep getting error connection to the database so it crashes my server.


REST INTERFACE

GET
The REST API of Get is mostly used for getting information or resources from the server such as paths to handlebars and such.

POST

The REST API of POST is both used in register function and login function when we are sending a request to database. For register function we use to POST the new user into the database and for login function it is more to POST user's credentials to the server about the user trying to login so we can authenticate by checking in our database.


ERROR HANDLING

Register Function
In the register post we first check if password and confirm password match, if not send out an error message that passwords do not match. We do not check if they are empty as our form will not allow them to submit without all fields are filled in. If no errors on the form we create the user then we also check if creating the user has failed, if so throw err.

Login Function
We first check if we can find the user's username in the database if not then done(err). If user's username and password do not much it goes to return done(null, false, {message: 'Invalid password)) which tells the user that the user's credentials was wrong. Password is invalid regarding the entered username.


Function Save Username
We check if the client query failed, if so return a callback with the error that allows us to know it failed insert into database.

Function FindByUser
We check if the client query failed, if so return a callback with the error that allows us to know it failed to search data in the database.