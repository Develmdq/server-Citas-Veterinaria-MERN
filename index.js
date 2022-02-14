const express = require("express");
const connectionDB = require("./config/db");
const cors = require('cors')

const app = express()

connectionDB()

app.use(cors())

app.use(express.json({extended:true}))

const PORT = process.env.PORT || 4000;

app.use("/api/appointments", require("./routes/appointments"));

app.listen(PORT, ()=>console.log('servidor ok'))
