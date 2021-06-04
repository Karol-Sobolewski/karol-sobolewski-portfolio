const express = require(`express`);
const cors = require(`cors`);
const path = require(`path`);
const mongoose = require(`mongoose`);

const menusRoutes = require(`./routes/menus.routes`);
const projectRoutes = require(`./routes/projects.routes`);
const skillRoutes = require(`./routes/skills.routes`);

const app = express();

/* MIDDLEWARE */
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, `../build`)));

/* API ENDPOINTS */
app.use(`/api`, menusRoutes);
app.use(`/api`, projectRoutes);
app.use(`/api`, skillRoutes);

/* REACT WEBSITE */
app.use(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `../build/index.html`));
});

/* API ERROR PAGES */
app.use(`/api`, (req, res) => {
  res.status(404).send({ data: `Not found...` });
});

/* MONGOOSE */
const dbURI =
  process.env.NODE_ENV === `production`
    ? `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/portfolioDB`;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// zCOp5t51zTM9h1AU
const db = mongoose.connection;
db.once(`open`, () => {
  console.log(`Successfully connected to the database`);
});
db.on(`error`, (err) => console.log(`Error: ${err}`));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
