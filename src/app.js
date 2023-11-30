const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb+srv://admin:4HBP1xMhAJjEF0dt@projectd0020e.bhuorhb.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define data model for search results
const SearchResultSchema = new mongoose.Schema({
  title: String,
  description: String
});

const SearchResult = mongoose.model('SearchResult', SearchResultSchema);

// Search API endpoint
app.get('/api/search', async (req, res) => {
  const searchTerm = req.query.term;

  const searchResults = await SearchResult.find({ title: { $regex: new RegExp(searchTerm, 'i') } });

  res.json({ results: searchResults });
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));