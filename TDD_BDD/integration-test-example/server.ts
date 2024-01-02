// server.ts

// @ts-ignore
import express, { Request, Response } from 'express';
// @ts-ignore
import { Calculator } from './calculator';

const app = express();
const calculator = new Calculator();

app.get('/calculator/add', (req: Request, res: Response) => {
  const { num1, num2 } = req.query;
  const result = calculator.add(Number(num1), Number(num2));
  res.json({ result });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
