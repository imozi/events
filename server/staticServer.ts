import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const isDEV = JSON.parse(process.env.IS_DEV as string);

const app = express();
const PORT = isDEV ? process.env.FRONTEND_PORT_DEV : process.env.FRONTEND_PORT_PROD;

app.use(express.static(path.join(__dirname, '../build')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Frontend is running on http://localhost:${PORT}`);
});
