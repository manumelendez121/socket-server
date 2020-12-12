import Server from './classes/Server';
import { SERVER_PORT } from './global/environment';
import { router } from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = new Server();

var configCors = { origin: true, credentials: true};

//parser request
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//cors
server.app.use(cors.apply(configCors));
//server.app.use(cors(configCors));


//manage request router
server.app.use('/', router);


server.start(() => {
    console.log(`Server listen ${SERVER_PORT}`);
});