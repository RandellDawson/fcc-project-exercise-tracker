import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/app/views/index.html')
});

app.use('/api', userRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
