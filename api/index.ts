import express, { Express, Request, Response, NextFunction } from "express";

const PORT = process.env.PORT;
const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Home" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
