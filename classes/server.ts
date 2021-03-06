import express from 'express'
import { SERVER_PORT } from '../global/environement';
import socketIO from 'socket.io'
import http from 'http'
import * as socket from '../sockets/socket'

export default class Server{
    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app)

        this.io = socketIO( this.httpServer )

        this.listenSocket();
    }

    public static get instance(){
        return this._instance || (this._instance = new this() );
    }


    private listenSocket(){

        console.log('hey you i am listening your sockets')

        this.io.on('connection', client =>{

            //conecting client

            socket.connectingClient(client);
            
            //user
            socket.user(client, this.io)
            
            //Messages
            socket.message(client, this.io);

            //disconnect
            socket.disconnect( client )


        } )
    }

    start( callback: Function ){
        this.httpServer.listen(this.port, callback());
    }
}