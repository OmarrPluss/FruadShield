require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enables CORS for all origins. For production, consider restricting to your frontend's domain.
app.use(express.json()); // To parse JSON bodies from incoming requests

// Supabase client initialization
// Ensure SUPABASE_URL and SUPABASE_KEY are set in your .env file
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Search endpoint
// This endpoint handles POST requests to /api/search
app.post('/api/search', async (req, res) => {
  try {
    const { query } = req.body; // Extract the 'query' from the request body

    // Basic validation: check if a search query is provided
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    // Perform the Supabase query
    // It searches the 'products' table for the 'query' string in 'name' or 'description' columns (case-insensitive)
    // and limits the results to 20.
    const { data, error } = await supabase
      .from('products') // IMPORTANT: Change 'products' to your actual table name in Supabase
      .select('*') // Selects all columns from the matching rows
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`) // Performs a case-insensitive LIKE search on 'name' OR 'description'
      .limit(20); // Limits the number of results returned

    // Handle Supabase errors
    if (error) {
      console.error('Supabase query error:', error);
      throw error; // Throw the error to be caught by the outer catch block
    }
    
    // Send the retrieved data back as a JSON response
    res.json(data);
  } catch (error) {
    // Log and send a 500 (Internal Server Error) response for any unexpected errors
    console.error('Server error during search:', error);
    res.status(500).json({ error: error.message || 'Internal server error.' });
  }
});

// Start the Express server and listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//login
/*
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(401).json({ error: error.message });

  const user = data.user;
  const session = data.session;
  const loginTime = new Date().toISOString();

  let role = user.user_metadata?.role;

  if (!role) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();
    role = profile?.role || 'guest';
  }

  res.cookie('session_info', JSON.stringify({
    id: user.id,
    role,
    loginTime
  }), {
    httpOnly: true,
    secure: true, 
    maxAge: 24 * 60 * 60 * 1000, 
    sameSite: 'Strict'
  });

  return res.json({ message: 'Login successful', user: { id: user.id, role } });
});

*/