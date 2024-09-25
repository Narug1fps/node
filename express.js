const express = require("express");
const userModel = require("./src/models/user.model");

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use((req, res, next) => {
  next();
});

app.get("/views/users", async (req, res) => {
  const users = await userModel.find({})
  res.render('index', {users})
});

app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await userModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    c;
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.massege);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}!`));
