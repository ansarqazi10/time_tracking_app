const router = require("express").Router();
const invoicesManager = require("../managers/invoice");

router.post("/", async (req, res) => {
  try {
    let invoice = await invoicesManager.create(req.body);
    return res.status(200).send(invoice);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let invoice = await invoicesManager.update(req.params.id, req.body);
    return res.status(200).send(invoice);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    let invoices = await invoicesManager.getAll();
    return res.status(200).send(invoices);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let invoice = await invoicesManager.getOne(req.params.id);
    return res.status(200).send(invoice);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let invoice = await invoicesManager.delete(req.params.id);
    return res.status(200).send(invoice);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
