import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Consumer } from '../Types/Consumer';


const CONSUMERS: Consumer[] = [
	{
    consumerID: "TC1",
    queueKey: 'TQ1',
	},
	{
    consumerID: "TC2",
    queueKey: 'TQ1',
	},
  {
    consumerID: "TC3",
    queueKey: 'TQ2',
	},
];

@Component({
  selector: 'app-consumer-view',
  templateUrl: './consumer-view.component.html',
})
export class ConsumerViewComponent {
	consumers$: Observable<Consumer[]> = of(CONSUMERS);
}
