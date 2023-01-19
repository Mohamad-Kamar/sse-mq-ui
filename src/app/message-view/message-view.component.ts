import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message } from '../Types/Message';
import { MessageViewService } from './message-view.service';

const MESSAGES: Message[] = [
	{
    messageID: "1",
    messageContent: "Message 1",
    durable: true,
    consumerID: "TC1",
	},
	{
    messageID: "2",
    messageContent: "Message 2",
    durable: true,
    consumerID: "TC1",
	},
	{
    messageID: "3",
    messageContent: "Message 3",
    durable: true,
    consumerID: "TC2",
	},
	{
    messageID: "4",
    messageContent: "Message 4",
    durable: true,
    consumerID: "TC2",
	},
];


@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  providers: [MessageViewService],
})

export class MessageViewComponent {
	messages$: Observable<Message[]> = of(MESSAGES);

}
