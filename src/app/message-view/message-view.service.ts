import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Types/Message';
import { map, Observable } from 'rxjs';

export type MessageCollection = {
  [messageID: string]: Message;
};

@Injectable({
  providedIn: 'root'
})
export class MessageViewService {
  baseURL = 'http://localhost:3491/consumer/message'
  messages$: Observable<Message[]>;
  constructor(private http: HttpClient){
    this.messages$ = this.http.get<MessageCollection>(this.baseURL)
    .pipe(
      map((messageCollection: MessageCollection) => Object.values(messageCollection))
    );;
  }
  getMessages(){
    return this.messages$
  }
}
