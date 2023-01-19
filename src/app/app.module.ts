import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageViewComponent } from './message-view/message-view.component';
import { QueueViewComponent } from './queue-view/queue-view.component';
import { ConsumerViewComponent } from './consumer-view/consumer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageViewComponent,
    QueueViewComponent,
    ConsumerViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
