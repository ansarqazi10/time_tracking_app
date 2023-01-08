const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  status: { type: String, required: true, default: "NOT PAID" },
  createdDate: { type: String, required: true, default: Date.now() },
  dueDate: { type: String, required: true },
  customerName: { type: String, required: true },
  amount: { type: String, required: true },
  tasks: [
    {
      projectId: { type: String, required: true },
      invoice: { type: String, required: true },
      taskName: { type: String, required: true },
      color: { type: String, required: true },
      date: { type: String, required: true },
      time: { type: String, required: true },
      amount: { type: String, required: true },
    },
  ],
  project: {
    projectName: { type: String, required: true },
    color: { type: String, required: true },
    date: { type: String, required: true },
  },
});

const Invoice = mongoose.model("Invoice", schema);

module.exports = Invoice;
