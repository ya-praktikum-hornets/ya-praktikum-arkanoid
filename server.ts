import express from 'express'
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.NODE_ENV)
app.use('/', express.static(path.join(__dirname, `${ENV === 'production' ? 'client' : 'build/client'}`)))
app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, `${ENV === 'production' ? 'client/index.html' : 'build/client/index.html'}`));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});