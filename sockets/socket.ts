import { Socket } from "socket.io";
import socketIO from 'socket.io';



export const disconnect = ( client : Socket) =>{
    client.on('disconnect', () =>{
        console.log('client disconnected')
    })
}

//listen message

export const message = (client: Socket, io:socketIO.Server)=>{

    client.on('msg', (payload: { to:string, body: string })=>{
        console.log('message recived', payload);

        io.emit('msg-new', payload);
    })
}