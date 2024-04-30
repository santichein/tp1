const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRoutes);


//rutas
app.get("/", (req, res) => {
    res.send("MI PRIMER API");
});

//conexion a mongoDB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("conectado a mongoDB Atlas"))
.catch((error) => console.log(error));

app.listen(port, () => console.log("servidor listo", port));
