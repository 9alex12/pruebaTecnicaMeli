import express, { Request, Response } from "express";

import getProducts from "./controllers/getProducts/getProducts";
import getProductById from "./controllers/getProductById/getProductById";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to the RESTful API!" });
});

app.get("/api/items", getProducts);
app.get("/api/items/:id", getProductById);

app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
