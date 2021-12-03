const express = require("express");
const app = express();
const bookRouter = express.Router()

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
bookRouter.route('/books')
.get((req, res) => {
  const response = { Hello: 'This is my API'}

  res.json(response)
})
app.use('/api', bookRouter)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
