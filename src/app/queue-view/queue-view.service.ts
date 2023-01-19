import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from '../Types/Queue';
import { map, Observable } from 'rxjs';

type QueueCollection = {[queueKey: string]: Queue};

@Injectable({
  providedIn: 'root'
})
export class QueueViewService {
  baseURL = 'http://localhost:3491/queue'
  queues$: Observable<Queue[]>;
  constructor(private http: HttpClient){
    this.queues$ = this.http.get<QueueCollection>(this.baseURL)
    .pipe(
      map((queuesCollection: QueueCollection) => Object.values(queuesCollection))
    );
  }
  getQueues(){
    return this.queues$
  }
}
