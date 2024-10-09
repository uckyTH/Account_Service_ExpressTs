import express, { Request, Response } from "express";
import connectDB from "./Database/db";

const app = express();

const PORT = 3000;
app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json("dadadad");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
