import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;

  constructor(
    private socket: Socket
    ) { 
      this.checkStatus();
     }

  checkStatus(){
      this.socket.on('connect', () =>{
        console.log('conected to server')
        this.socketStatus = true
      })

      this.socket.on('disconnect', () =>{
        console.log('disconected to server')
        this.socketStatus = false
      })
    }


  emit( event: string, payload?:any, callback?:Function ){

    this.socket.emit(event, payload, callback);

    }






}
