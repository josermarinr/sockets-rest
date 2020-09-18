import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    public wsService : WebsocketService,
    public chatService: ChatService
  ){}
    ngOnInit(){
      
      this.chatService.sendMessage('hello this is angular')
    
    }

}
