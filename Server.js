require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS

// Import the authRoutes from routes/auth.js correctly
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());  // Use CORS to enable cross-origin requests
app.use(bodyParser.json());  // Parse JSON request body

// Use the authRoutes correctly
app.use("/api/auth", authRoutes);  // This will handle routes like /api/auth/register

// Debugging: Ensure environment variables are loaded correctly
console.log("DEBUG: MONGO_URI ->", process.env.MONGO_URI);
console.log("DEBUG: DBNAME ->", process.env.DBNAME);

// Validate required environment variables
if (!process.env.MONGO_URI || !process.env.DBNAME) {
  console.error("ERROR: MONGO_URI or DBNAME is not defined in the .env file!");
  process.exit(1); // Exit if critical environment variables are missing
}

// Ensure the Mongo URI is correctly combined
const mongoUri = `${process.env.MONGO_URI}${process.env.DBNAME}`; // Combine URI and DB name

// MongoDB Connection Test and Server Start
(async () => {
  try {
    // Connecting to MongoDB
    console.log("Connecting to MongoDB with Mongoose...");
    await mongoose.connect(mongoUri);

    console.log("Connected to MongoDB using Mongoose");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit if the connection fails
  }
})();



/*require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import the authRoutes from routes/auth.js correctly
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Use the authRoutes correctly
app.use("/api/auth", authRoutes);  // This will handle routes like /api/auth/register

// Debugging: Ensure environment variables are loaded correctly
console.log("DEBUG: MONGO_URI ->", process.env.MONGO_URI);
console.log("DEBUG: DBNAME ->", process.env.DBNAME);

if (!process.env.MONGO_URI || !process.env.DBNAME) {
  console.error("ERROR: MONGO_URI or DBNAME is not defined in the .env file!");
  process.exit(1); // Exit if critical environment variables are missing
}

const mongoUri = `${process.env.MONGO_URI}/${process.env.DBNAME}`; // Append DB name if needed

// MongoDB Connection Test (Optional)
(async () => {
  try {
    // Proceed to connect with Mongoose
    console.log("Connecting to MongoDB with Mongoose...");
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB using Mongoose");

    // Start the server
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit if the connection fails
  }
})();
*/