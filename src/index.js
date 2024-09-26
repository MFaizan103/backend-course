import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

// Load environment variables from.env file
dotenv.config({
  path: "./env",
});

// Connect to MongoDB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed", error);
  });
