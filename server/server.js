const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./connect");
const cors = require("cors");
const updatedRoutes = require("./routes");

const app = express();
const PORT = zed-new-alisunskill.vercel.app;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use(cors({
  origin: 'https://zed-new-alisunskill.vercel.app', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204
}));

// Routes
app.use("/api", updatedRoutes);

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://zedapp:zedapp@cluster0.nt0qqvj.mongodb.net/zedapp?retryWrites=true&w=majority"
    );
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};


start();

module.exports = app;
