import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Types/Message';
import { map, Observable } from 'rxjs';
import { ConfigService } from '../config.service';

export type MessageCollection = {
  [messageID: string]: Message;
};

@Injectable({
  providedIn: 'root',
})
export class MessageViewService {
  url: string;
  messages$: Observable<Message[]>;
  constructor(
    private http: HttpClient,
    private readonly configService: ConfigService
  ) {
    this.url = this.configService.getBaseUrl() + '/consumer/message';
    this.messages$ = this.http
      .get<MessageCollection>(this.url)
      .pipe(
        map((messageCollection: MessageCollection) =>
          Object.values(messageCollection)
        )
      );
  }
  getMessages() {
    return this.messages$;
  }
}
