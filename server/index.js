import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//import routes from routes folder 
import postRoutes from './routes/posts.js';

const app = express();

dotenv.config();

//middleware

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
// app.use(express.json()); //Used to parse JSON bodies
// app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(cors())
// alaways have app.use cors above postRoutes
app.use('/posts', postRoutes);

app.get('/', (req,res) => {
    res.send('hello')
});

//mongoDB connect
//const CONNECTION_URL = 'mongodb+srv://farhan:farhankhan1@cluster0.crbvr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// port for backend needs to changed for deployment at HEROKU, as HEROKU does this automatically
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) =>console.log(error.message));
mongoose.set('useFindAndModify', false);
