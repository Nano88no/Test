const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:4HBP1xMhAJjEF0dt@projectd0020e.bhuorhb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a MongoDB model (replace 'YourModel' and 'yourSchema' with your actual model and schema)
const YourModel = mongoose.model('Testdata', productSchema);

// Express route for searching
app.get('/search', async (req, res) => {
  const searchTerm = req.query.q;

  try {
    // Search in the MongoDB collection using your model
    const results = await Testdata.find({ name: new RegExp(searchTerm, 'i') });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
