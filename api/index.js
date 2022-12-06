const server = require('./src/app.js');
// const { mongoConection } = require('./src/db.js');
const PORT = 3001;

// Syncing all the models at once.
// mongoConection.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server is listening at Port ${PORT}`); // eslint-disable-line no-console
     });
// });