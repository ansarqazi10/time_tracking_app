const router = require("express").Router();
const projectManager = require("../managers/projects");

router.post("/", async (req, res) => {
  try {
    let project = await projectManager.create(req.body);
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let project = await projectManager.update(req.params.id, req.body);
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let projects = await projectManager.getAll();
    return res.status(200).send(projects);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let project = await projectManager.getOne(req.params.id);
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let project = await projectManager.delete(req.params.id);
    return res.status(200).send(project);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
