const express = require('express'); // Import Express
const fs = require('fs'); //
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
    res.json([{name : 'ajay',
      age : 30,
      city : 'New York'
    }, {
      name : 'John',
      age : 25,
      city : 'Los Angeles'
    }]);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
