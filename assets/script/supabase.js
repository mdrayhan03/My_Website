const supabaseUrl = 'https://aidjhvfvbyudzrzduwag.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZGpodmZ2Ynl1ZHpyemR1d2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTQ4NDAsImV4cCI6MjAzOTEzMDg0MH0.A7otTKYyjRPA7bVxgcFotw7UswxmWJytnzddYcZyLk4';
const base = supabase.createClient(supabaseUrl, supabaseKey);

// Use the 'supabase' variable here
// supabase.from('your_table_name').select('*')
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));



// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://aidjhvfvbyudzrzduwag.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)