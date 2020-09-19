import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { UsersList } from '../classes/users-lis';
import { User } from '../classes/user';


export const usersConected = new UsersList();


export const connectingClient = ( client: Socket)=>{

    const user = new User( client.id);

    usersConected.add(user);

}

export const disconnect = ( client : Socket) =>{
    client.on('disconnect', () =>{
        console.log('client disconnected')
        usersConected.deleteUser(client.id);
    })
}

//listen message

export const message = (client: Socket, io:socketIO.Server)=>{

    client.on('msg', (payload: { to:string, body: string })=>{
        console.log('message recived', payload);

        io.emit('msg-new', payload);
    })
}



//Config user

export const user = (client: Socket, io:socketIO.Server)=>{

    client.on('config-user', (payload: { name: string }, callback: Function)=>{
        

        usersConected.updateName(client.id, payload.name)

        callback({
            ok: true,
            message: `user ${payload.name}, config`
        })
        //io.emit('new-user', payload);
    })
}
