require('dotenv').config();
const server = require('./src/app.js');
require('./src/db.js');
const port = process.env.PORT || 3001

// Syncing all the models at once.
server.listen(port, () => {    
  console.log(`Server is listening at Port ${port}`); // eslint-disable-line no-console
});