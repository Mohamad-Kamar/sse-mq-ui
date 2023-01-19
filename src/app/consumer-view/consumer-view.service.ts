import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumer } from '../Types/Consumer';
import { map, Observable } from 'rxjs';

export type ConsumerCollection = {
  [consumerID: string]: Consumer;
};

@Injectable({
  providedIn: 'root'
})
export class ConsumerViewService {
  baseURL = 'http://localhost:3491/consumer'
  consumers$: Observable<Consumer[]>;
  constructor(private http: HttpClient){
    this.consumers$ = this.http.get<ConsumerCollection>(this.baseURL)
    .pipe(
      map((consumerCollection: ConsumerCollection) => Object.values(consumerCollection))
    );
  }
  getConsumers(){
    return this.consumers$
  }
}
