import 'colors';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';


var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

routes(app);

app.listen(process.env.PORT)

console.log(`Node server is started in server/app.js and running on port ${process.env.PORT}`.green)