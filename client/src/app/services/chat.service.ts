import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public wsServices: WebsocketService
  ) { }

  sendMessage( message: string){
    const payload = {
      to: this.wsServices.getUser().name,
      body: message
    }

    this.wsServices.emit('msg', payload);
  }

  getMessages(){
    return this.wsServices.listen('msg-new');
  }

  getPrivateMessages(){
    return this.wsServices.listen('private-message')
  }

}
