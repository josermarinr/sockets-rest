import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false;
  public user: User = null;

  constructor(
    private socket: Socket
    ) { 
      this.loadStorage();
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

    //emit
  emit( event: string, payload?:any, callback?:Function ){

    this.socket.emit(event, payload, callback);

    }

    //listen event
  listen( event: string  ){

    return this.socket.fromEvent( event );

  }


  LoginWS( name: string){
    
    return new Promise( (resolve, reject)=>{

      this.emit('config-user', {name}, (resp: Function) =>{
        
        this.user = new User(name);
        this.saveStorage()
        resolve();
        
      })
      
    })
  
    // this.socket.emit('config-user', {name}, (resp)=>{
    //   console.log(resp)
    // })
  }

  getUser(){
    return this.user
  }

  saveStorage(){
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  loadStorage(){
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user'))
      this.LoginWS(this.user.name)
    }
  }



}
