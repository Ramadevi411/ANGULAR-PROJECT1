import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message1',
  standalone: true,
  imports: [],
  templateUrl: './message1.component.html',
  styleUrl: './message1.component.css'
})
export class Message1Component {

  constructor(public messageService:MessageService){}

  sendMsg(msg:any){
    this.messageService.sendMessage(msg);
  }
  clearMsg(){
    this.messageService.clearMessage();
  }

}
