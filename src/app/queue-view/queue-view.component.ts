import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Queue } from '../Types/Queue';


const QUEUES: Queue[] = [
	{
    queueType: "fanout",
    queueKey: 'TQ1',
	},
	{
    queueType: "direct",
    queueKey: 'TQ2',
	},
  {
    queueType: "roundrobin",
    queueKey: 'TQ3',
	},
];
@Component({
  selector: 'app-queue-view',
  templateUrl: './queue-view.component.html',
})
export class QueueViewComponent {
	queues$: Observable<Queue[]> = of(QUEUES);
}
