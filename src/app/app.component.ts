import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  queue = 'Queues';
  message = 'Messages';
  consumer = 'Consumers';
	active = this.queue;
}
