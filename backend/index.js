import express from 'express';
// import cors from 'cors';
import pkg from 'node-cron';
const { schedule} = pkg;

import router from './config/routes.js';
import { telegrafiInfo } from './cronServices/getTelegrafiScrappedData.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// app.use(cors());

app.use('/api/v1', router);
// const CONNECTION_URL = 'mongodb+srv://lirimi_31:reviewapp3@cluster0.kjl4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

app.listen(PORT, async () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`)
  // const [result1, result2] = await Promise.all([getImages('https://telegrafi.com/lajme'), getImages('https://telegrafi.com/bote')]);

})

schedule('* * * * *', async function() {
  const result = await telegrafiInfo();
  // fs.writeFile('data/telegrafiNews.json', data, (err) => {
  //   if (err) {
  //       throw err;
  //   }
  // });
  console.log('Result 1 ', result)
});

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);