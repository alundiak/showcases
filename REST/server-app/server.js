// Code below has been generated by ChatGPT initially but I changed then
// Code relies on emulation of REST/CRUD activities. No actual database used YET.

const express = require('express');
const apiRouter = require('./api');
// const newApiRouter = require('./api-real');

const app = express();
const port = 3000;

app.use('/', apiRouter); // Mount the API router at the root path for testing

// app.use('/', newApiRouter);
// This way, both sets of routes will be accessible under the root path ('/'). 
// If you want the new routes to be under a specific path (e.g., /v2), => app.use('/v2', newApiRouter);

// should be executed after ALL routes handlers
// app.use(errorHandler);
// IF NEEDED

if (require.main === module) {
  // Only start the server if this script is run directly
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
// ESM
// if (import.meta.url === new URL(import.meta.url).toString()) {
//   // Only start the server if this script is run directly
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// }

module.exports = app;
