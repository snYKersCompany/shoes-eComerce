const server = require('./src/app.js');
const { connect } = require('./src/db.js');
const PORT = process.env || 3001;

// Syncing all the models at once.
connect.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('Server is listening at Port ' + PORT); // eslint-disable-line no-console
  });
});