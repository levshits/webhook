import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import {Server, Path, GET, PathParam} from "typescript-rest";
import {HelloService} from './services/HelloService'

class App {
    public app: express.Application;

    public static bootstrap(): App {
        return new App();
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

var serverInstance = App.bootstrap();

Server.buildServices(serverInstance.app, HelloService);

serverInstance.app.listen(3000);
