import express from 'express'
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
import dotenv from 'dotenv'
dotenv.config()


app.use('/', express.static(path.join(__dirname, 'client')))
app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});