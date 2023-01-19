import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageViewComponent } from './message-view/message-view.component';
import { QueueViewComponent } from './queue-view/queue-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageViewComponent,
    QueueViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
