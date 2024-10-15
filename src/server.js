require("dotenv").config();
const express = require("express"); //commonjs
const configViewEngine = require("./config/viewEngine");
const apiRoutes = require("./routes/api");
const connection = require("./config/database");
const { getHomepage } = require("./controllers/homeController");

const app = express();
const port = process.env.PORT || 8888;

//config req.body
app.use(express.json()); // // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses form data

//config template engine
configViewEngine(app);

const webAPI = express.Router();
app.get("/", getHomepage); // Define homepage route

//khai báo route
app.use("/", webAPI); //Mounting the webAPI Router
app.use("/v1/api/", apiRoutes); // Mount API routes under /v1/api/

(async () => {
  try {
    //using mongoose
    // await connection();

    // Start the server
    app.listen(port, () => {
      console.log(`Backend Nodejs App listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
