const express= require ("express");
const app = express();
const mongoose= require ("mongoose");
const dotenv= require ("dotenv");
const helmet= require ("helmet");
const morgan= require ("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection events
 const db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function () {
//  Connection successful, you can start your application logic here
     console.log('Connected to MongoDB');
 });

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
    res.send("Welcome to Homepage")
})

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);


app.listen(8800,()=>{
    console.log("Backend server is running")
})