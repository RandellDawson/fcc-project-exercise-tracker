import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import exerciseRoutes from './routes/exercises.js';

dotenv.config();

const app = express();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

app.use(cors());
app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_, res) => {
  res.sendFile(process.cwd() + '/app/views/index.html')
});

app.use('/api', exerciseRoutes, userRoutes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
