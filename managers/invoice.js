let Invoice = require('../models/invoice');

const invoiceManager = {
    create: async data => { 
        let invoice = new Invoice(data);
        invoice = await invoice.save();
        return invoice;
    },

    getAll: async () => {
        let invoices = await Invoice.find({});
        return invoices;
    },

    getOne: async (id) => {
        let invoice = await Invoice.findById(id);
        return invoice;
    },

    update: async (id, data) => {
        let invoice = await Invoice.findByIdAndUpdate(id, {
            status: data.status,
            createdDate: data.createdDate,
            dueDate: data.dueDate,
            customerName: data.customerName,
            amount: data.amount,
            invoices: data.invoices,
            project: data.project,
            tasks: data.tasks,
        }, {
            new: true
        });
        return invoice;
    },

    delete: async (id) => {
        let invoice = await Invoice.findByIdAndDelete(id);
        return invoice;
    }
}

module.exports = invoiceManager;   