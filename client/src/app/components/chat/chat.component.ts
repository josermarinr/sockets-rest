import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  
  text = "";
  messagesSubscription : Subscription;
  messages: any[] = [];
  elements: HTMLElement;

  constructor(
    public chatservices: ChatService
  ) { }

  ngOnInit(): void {
    this.elements = document.getElementById('chat-messages');

    this.messagesSubscription = this.chatservices.getMessages().subscribe(msg =>{
      
      this.messages.push(msg);

      setTimeout(()=>{
        this.elements.scrollTop = this.elements.scrollHeight;
      },50)
    })
    
  }
  ngOnDestroy(){
    this.messagesSubscription.unsubscribe()
  }

  send(){
    
    if(this.text.trim().length ===0){
      return
    }

    this.chatservices.sendMessage(this.text)
    console.log(this.text)
    this.text = '';
  }
}
