// // importing express and then creating an express application 

// const { application } = require('express');
// const express = require('express');
// const app = express();

// // 1 - importing the user routes we made in the routes folder:
// const users = require('./routes/users')

// // 2 - Registering what we imported as middleware 
// app.use('/api/users', users)

// // Creating routes to handle incoming requests on the express application
// // If the user accesses these routes, we send back the stated response
// app.get('/api', (req, res) => {
//     res.send('hello world through the world of express!')

// })

// app.listen(1233);