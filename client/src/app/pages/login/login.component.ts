import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = ''

  constructor(
    public wsServices:WebsocketService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  insert(){
   this.wsServices.LoginWS(this.name)
    .then( ()=>{
      this.router.navigateByUrl('/messages')
    })
  }

}
