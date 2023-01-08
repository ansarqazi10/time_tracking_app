require('dotenv').config();
require('./db-connection');
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const PORT = process.env.PORT || 5050;

const app = express();
app.use(cors());

const projectsRouter = require('./routes/projects');
const tasksRouter = require('./routes/tasks');
const invoicesRouter = require('./routes/invoice');

app.use(bodyParser.json());

app.get("/", async (req, res) => { res.status(200).send("API is working...") });
app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);
app.use('/invoices', invoicesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
