const express = require("express");
const connectionDB = require("./config/db");
const cors = require('cors')

const app = express()

connectionDB()

const optionsCors = {
  origin: process.env.FRONTEND_URL || null,
};


app.use(cors(optionsCors.origin));

app.use(express.json({extended:true}))

const port = process.env.PORT || 4000;

app.use("/api/appointments", require("./routes/appointments"));

app.listen(port, "0.0.0.0", () => console.log(`Servidor Ok en puerto ${port}`));
