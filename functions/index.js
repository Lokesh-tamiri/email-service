var functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
var express = require("express")
var cors = require("cors");
var app = express(); //starts an express app
app.use(express.json()); //body parser
app.use(cors());

app.use("/v1",require("./routes/index"))



exports.api = functions.https.onRequest(app);