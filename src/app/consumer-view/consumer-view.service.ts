import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consumer } from '../Types/Consumer';
import { map, Observable } from 'rxjs';
import { ConfigService } from '../config.service';

export type ConsumerCollection = {
  [consumerID: string]: Consumer;
};

@Injectable({
  providedIn: 'root',
})
export class ConsumerViewService {
  url: string;
  consumers$: Observable<Consumer[]>;
  constructor(
    private http: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.url = this.configService.getBaseUrl() + '/consumer';
    this.consumers$ = this.http
      .get<ConsumerCollection>(this.url)
      .pipe(
        map((consumerCollection: ConsumerCollection) =>
          Object.values(consumerCollection)
        )
      );
  }
  getConsumers() {
    return this.consumers$;
  }
}
