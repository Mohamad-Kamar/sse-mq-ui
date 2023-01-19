import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from '../Types/Queue';
import { map, Observable } from 'rxjs';
import { ConfigService } from '../config.service';

type QueueCollection = { [queueKey: string]: Queue };

@Injectable({
  providedIn: 'root',
})
export class QueueViewService {
  url: string;
  queues$: Observable<Queue[]>;
  constructor(
    private http: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.url = this.configService.getBaseUrl() + '/queue';
    this.queues$ = this.http
      .get<QueueCollection>(this.url)
      .pipe(
        map((queuesCollection: QueueCollection) =>
          Object.values(queuesCollection)
        )
      );
  }
  getQueues() {
    return this.queues$;
  }
}
