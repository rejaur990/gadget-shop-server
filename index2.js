// const { MongoClient, ServerApiVersion } = require("mongodb");
// import { version } from "os";
// import { ServerApi } from "./node_modules/mongodb/src/mongo_client";
// import { strict } from "assert";
// const app = require("./app");
// const PORT = 4000;
// const port = process.env.PORT || 3000;
// //const port = process.env.PORT || 4000;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("server is running");
// });
// app.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
// });

// mongo bd

// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zjxwb2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// const client = new MongoClient(url, {
//   ServerApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
// const dbConnect = async () => {
//   try {
//     client.connect();
//     console.log("database coonected successfully");
//   } catch (error) {
//     console.log(error.name, error.message);
//   }
// };
// dbConnect();










// const express = require("express")
// const cors = require("cors");
// require("dotenv").config();
// const app = express()
// const port = process.env.PORT || 4000;
// middleware
// app.use(cors());
// app.use(express.json());
// mongodb
// api
// app.get("/", (req, res) => {
//   res.send("server is running");
// });
// app.listen(port, () => {
//   console.log(`Server is running on port, ${port}`);
// });


