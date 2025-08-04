require("dotenv").config(); //This will add the process for the mongo url and the file will be ignored by git
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

console.log("MongoDB URI:", uri ? "URI loaded successfully" : "URI not found");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "http://localhost:3001",
    "http://localhost:3003", // Add port 3003 for dashboard
    process.env.FRONTEND_URL || "http://localhost:3000",
    process.env.DASHBOARD_URL || "http://localhost:3001",
    "https://rapid-stocks-frontend.vercel.app",
    "https://rapid-stocks-dashboard.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(cookieParser());
app.use(bodyParser.json()); // Middleware for parsing JSON
// Middleware for parsing JSON
app.use(express.json());

// Health check endpoint for Railway
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    service: "Rapid Stocks API"
  });
});

// Authentication Routes
app.use("/auth", authRoute);

// Route to get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/addHoldings", (req, res) => {
  let tempHoldings = [
    {
      name: "AAPL",
      qty: 10,
      avg: 150.0,
      price: 155.0,
      net: "+3.33%",
      day: "+1.50%",
    },
    {
      name: "GOOGL",
      qty: 5,
      avg: 2800.0,
      price: 2900.0,
      net: "+3.57%",
      day: "+2.14%",
    },
    {
      name: "TSLA",
      qty: 12,
      avg: 700.0,
      price: 680.0,
      net: "-2.86%",
      day: "-1.47%",
    },
  ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });

   res.send("Holdings added!");
 });

app.get("/addPositions", (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
    {
      product: "MIS",
      name: "TATASTEEL",
      qty: 5,
      avg: 140.50,
      price: 145.80,
      net: "+3.77%",
      day: "+2.15%",
      isLoss: false,
    },
    {
      product: "CNC",
      name: "RELIANCE",
      qty: 3,
      avg: 2200.00,
      price: 2112.40,
      net: "-3.98%",
      day: "+1.44%",
      isLoss: true,
    },
  ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });

  res.send("Positions added!");
});

// Route to get all orders
app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Route to get all positions
app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

//POST OPERATIONS

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.json({ message: "Order saved successfully", order: newOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});





// Connect to MongoDB and start the server

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB successfully!");

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`App started on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });
