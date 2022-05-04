require("dotenv").config();

const express = require("express");

const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  {
    userName: "Antonio Gally",
    title: "hi",
  },
  {
    userName: "Antonio Gally",
    title: "hi2",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.userName === req.user.name));
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["x-token"];
  let token = authHeader && authHeader;
  //   const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); //token no longer valid
    req.user = user;
    next();
  });
}

app.listen(3000);
