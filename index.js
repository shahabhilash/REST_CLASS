const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4 : uuidv4 }= require('uuid');
uuidv4(); // ⇨ '9b1d  eb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

let posts = [
  { id: uuidv4(),
    username: "Apna college",
    content : "I love coding"
  },
  { id: uuidv4(),
    username: "Abhilash Shah",
    content : "Hardwork always pays off"
  },
  { id: uuidv4(),
    username: "Unknown",
    content : "I got my first internship!"
  },
]

app.get('/posts', (req, res) => {
  res.render("index.ejs", {posts})
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let {username, content} = req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  res.redirect("/posts");
});

app.get('/posts/:id', (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id ===p.id); 
  res.render(show.ejs)
});

app.patch("/posts/:id",(req, res) => {
  let {id}= req.params;
  console.log(id);
  res.send("patch request working");
})

app.delete("/posts/:id",(req, res) => { 
  let {id}= req.params;
  posts = posts.filter((p) => id !== p.id);
  res.render("post.ejs", );
});

app.listen(port, () => {
  console.log("listening to port : 8080");
}); 
