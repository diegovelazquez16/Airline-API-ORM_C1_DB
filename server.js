const http = require('http');
const app = require('./app');
const { connection } = require('./models');

const PORT = process.env.PORT || 3000;

connection.sync()
  .then(() => {
    console.log('Successful database connection and synchronised models.');
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error when synchronising with the database:', error);
  });
