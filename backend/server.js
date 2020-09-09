const  dotenv = require ('dotenv');
const express = require ('express');
const path = require ('path');
const config = require ('./config');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const userRoute = require ('./routes/userRoute');
const productRoute = require ('./routes/productRoute');


dotenv.config();

const PORT = process.env.PORT || 5000;

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

if (process.env.NODE_ENV === 'production') {
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});
}
app.listen(PORT, () => {console.log('server started on port' + PORT)});