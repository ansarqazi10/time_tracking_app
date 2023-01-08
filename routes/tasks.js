const router = require("express").Router();
const tasksManager = require("../managers/tasks");

router.post("/", async (req, res) => {
  try {
    let task = await tasksManager.create(req.body);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let task = await tasksManager.update(req.params.id, req.body);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let tasks = await tasksManager.getAll();
    return res.status(200).send(tasks);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let task = await tasksManager.getOne(req.params.id);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let task = await tasksManager.delete(req.params.id);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
