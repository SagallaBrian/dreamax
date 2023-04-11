const express = require("express");
const router = express.Router();

const pointsController = require("../controllers/pointsController");

// Create a new points entry
router.post("/", pointsController.createPoints);

// Get all points entries
router.get("/", pointsController.getAllPoints);

// Get a single points entry by ID
router.get("/:id", pointsController.getPointsById);

// Update a points entry by ID
router.put("/:id", pointsController.updatePointsById);

// Delete a points entry by ID
router.delete("/:id", pointsController.deletePointsById);

module.exports = router;
