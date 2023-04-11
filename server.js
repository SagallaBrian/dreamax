// Import dependencies
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define routes
const customerRoute = require("./routes/customerRoute");
app.use("/api/v1/customers", customerRoute);

const pointsRoutes = require("./routes/pointsRoute");
app.use("/api/v1/points", pointsRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Dreamer Rest Api!" });
});

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
