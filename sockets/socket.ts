import { Socket } from "socket.io";



export const disconnect = ( client : Socket) =>{
    client.on('disconnect', () =>{
        console.log('client disconnected')
    })
}

//listen message

export const message = (client: Socket)=>{

    client.on('msg', (payload: { to:string, body: string })=>{
        console.log('message recived', payload)
    })
}