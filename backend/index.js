import express from 'express';
// import cors from 'cors';

import router from './config/routes.js';
import { getImages } from './cronServices/getTelegrafiScrappedData.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
// app.use(cors());

app.use('/api/v1', router);
// const CONNECTION_URL = 'mongodb+srv://lirimi_31:reviewapp3@cluster0.kjl4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port: http://localhost:${PORT}`)
  getImages;
})

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => )
//   .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);