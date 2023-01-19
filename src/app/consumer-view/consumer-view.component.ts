import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Consumer } from '../Types/Consumer';
import { ConsumerViewService } from './consumer-view.service';


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
  providers: [ConsumerViewService],
})
export class ConsumerViewComponent {
	consumers$: Observable<Consumer[]>;
  constructor(private readonly consumerService: ConsumerViewService){
    this.consumers$ = this.consumerService.getConsumers()
  }
}
