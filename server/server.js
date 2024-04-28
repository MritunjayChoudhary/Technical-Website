require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const cors = require("cors");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute);

app.use("/api/form",contactRoute);

app.use(errorMiddleware);

const PORT = 3001;
connectDB().then(() =>{
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})})