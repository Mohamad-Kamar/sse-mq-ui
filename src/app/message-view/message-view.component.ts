import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message } from '../Types/Message';
import { MessageViewService } from './message-view.service';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  providers: [MessageViewService],
})

export class MessageViewComponent {
	messages$: Observable<Message[]>;
  constructor(private readonly messageService: MessageViewService){
    this.messages$ = this.messageService.getMessages()
  }
}
