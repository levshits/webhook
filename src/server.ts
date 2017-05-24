import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();
        this.config();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use("/static", express.static(path.join(__dirname, "../static")));
    }
}
var serverInstance = Server.bootstrap();
serverInstance.app.listen(3000);


