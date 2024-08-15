const supabaseUrl = 'https://aidjhvfvbyudzrzduwag.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZGpodmZ2Ynl1ZHpyemR1d2FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NTQ4NDAsImV4cCI6MjAzOTEzMDg0MH0.A7otTKYyjRPA7bVxgcFotw7UswxmWJytnzddYcZyLk4';
const base = supabase.createClient(supabaseUrl, supabaseKey);

// Use the 'supabase' variable here
// base.from('tb_review').select('*')
//   .then(response => console.log(response))
//   .catch(error => console.error('Error:', error));

function insertData(name, email, comment, selectedValue) {
  console.log("Here now");
  base.from('tb_review')
    .insert([
      { user_name: name, user_email: email, user_rating: selectedValue, user_comment: comment }
    ])
    .then(response => {
      console.log(response);
      if (response.error) {
        console.error('Error:', response.error);
        alert('Error:', response.error);
      } else {
        console.log('Data inserted:', response.data);
        alert("Thank you.\nYour comment is added.");
      }
    })
    .catch(error => console.error('Error:', error));
}


document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log("click here");
  const name = document.getElementById("name-input").value;
  const email = document.getElementById("email-input").value;
  const comment = document.getElementById("comment-input").value;
  const radios = document.querySelectorAll('input[name="rating"]');
  let selectedValue;           
  radios.forEach((radio) => {
      if (radio.checked) {
          selectedValue = parseFloat(radio.value);
      }
  });
  insertData(name,email,comment,selectedValue);
})

async function selecttData() {
  const response = await base.from('tb_review').select("*");
  if (response.error) {
    console.error('Error:', response.error);
  } else {
    const data = response.data;
    // console.log('Data fetched:', data);
    return data;
  }
}

(async () => {
  const data = await selecttData();
  var rating = 0;
  data.forEach((row, index) => {
    rating += parseInt(row.user_rating);
  });
  data.forEach((row, index) => {
    const newdiv = document.createElement("div");
    newdiv.className = "element";
    const firstpart = document.createElement("div");
    firstpart.className = "first-part"
    newdiv.appendChild(firstpart);

    const h4 = document.createElement("h4");
    const h4node = document.createTextNode(row.user_name);
    h4.appendChild(h4node);

    const rate = document.createElement("p");
    const ratenode = document.createTextNode("★" + row.user_rating + "/5");
    rate.appendChild(ratenode);

    firstpart.appendChild(h4);
    firstpart.appendChild(rate);

    const secondpart = document.createElement("div");
    secondpart.className = "second-part";
    newdiv.appendChild(secondpart);

    const comment = document.createElement("p");
    const commentnode = document.createTextNode(row.user_comment);
    comment.appendChild(commentnode);

    secondpart.appendChild(comment);

    const parent = document.getElementsByClassName("comment-body")[0];
    parent.appendChild(newdiv);
  })
  rating = rating / data.length ;
  rating = rating.toFixed(1);
  document.getElementsByClassName("rate")[0].innerHTML = "Rating: ★" + rating + "/5";
  if (data.length > 3) {
    document.getElementsByClassName("comment-body")[0].style.height = "300px";
  }
})();


// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://aidjhvfvbyudzrzduwag.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)