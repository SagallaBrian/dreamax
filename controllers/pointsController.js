const Points = require("../models/pointsModel");

// Create a new points record
exports.createPoints = async (req, res) => {
  try {
    const { customerId, amount } = req.body;

    // Create new Points record
    const newPoints = new Points({
      customerId,
      amount,
      transactionType,
    });

    // Save new Points record to database
    const savedPoints = await newPoints.save();

    res.status(201).json({
      success: true,
      message: "Points created successfully",
      points: savedPoints,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get all points records for a customer
exports.getAllPoints = async (req, res) => {
  try {
    const { customerId } = req.params;

    // Find all Points records for a customer
    const points = await Points.find({ customerId });

    res.status(200).json({
      success: true,
      message: "Points fetched successfully",
      points,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update a points record for a customer
exports.updatePoints = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, transactionType } = req.body;

    // Find Points record by id
    const points = await Points.findById(id);

    // Update Points record
    points.amount = amount;
    points.transactionType = transactionType;

    // Save updated Points record to database
    const savedPoints = await points.save();

    res.status(200).json({
      success: true,
      message: "Points updated successfully",
      points: savedPoints,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Delete a points record for a customer
exports.deletePoints = async (req, res) => {
  try {
    const { id } = req.params;

    // Find Points record by id and delete
    await Points.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Points deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
