import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", UserRoute); //panggil router yang telah dibuat di UserRoute.js

app.listen(8080, () => console.log("Server running on port 5000"));
