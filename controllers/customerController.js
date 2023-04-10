const Customer = require("../models/cutomerModel");

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    const customer = new Customer({
      firstName,
      lastName,
      phone,
      email,
      password,
    });
    await customer.save();
    res.status(201).json({
      success: true,
      message: "Customer created successfully",
      customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json({
      success: true,
      message: "Customers retrieved successfully",
      customers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get a single customer by id
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }
    res.status(200).json({
      success: true,
      message: "Customer retrieved successfully",
      customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update a customer by id
exports.updateCustomerById = async (req, res) => {
  try {
    const { firstName, lastName, phone, email } = req.body;
    const customer = await Customer.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, phone, email },
      { new: true }
    );
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }
    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a customer by id
exports.deleteCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }
    res.status(200).json({
      success: true,
      message: "Customer deleted successfully",
      customer,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
