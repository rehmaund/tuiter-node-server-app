import mongoose from "mongoose";
const DB_CONNECTION_STRING = 'mongodb://localhost:27017/tuiter' || process.env.DB_CONNECTION_STRING
//const DB_CONNECTION_STRING = 'mongodb+srv://rmaunder4:mochiwebdev144@cluster0.bwn0cio.mongodb.net/tuiter?retryWrites=true&w=majority'
//const DB_CONNECTION_STRING = 'mongodb+srv://rmaunder4:mochiwebdev144@cluster1.hybi86i.mongodb.net/tuiter?retryWrites=true&w=majority'
mongoose.connect(DB_CONNECTION_STRING);
import express from 'express';
import cors from 'cors';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
