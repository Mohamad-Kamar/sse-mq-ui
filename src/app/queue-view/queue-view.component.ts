import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Queue } from '../Types/Queue';
import { QueueViewService } from './queue-view.service';

@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
  providers: [QueueViewService],
})
export class QueueViewComponent {
	queues$: Observable<Queue[]>;
  constructor(private readonly queueService: QueueViewService){
    this.queues$ = this.queueService.getQueues()
  }
}
