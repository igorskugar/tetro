const path = require('path');

module.exports = {
  build: {
    web: path.join(__dirname, 'public')
  },
  src: path.join(__dirname, 'src'),
  client: path.join(__dirname, 'src', 'client')
};
