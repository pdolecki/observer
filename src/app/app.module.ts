import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';
import { QueryComponent } from './query/query.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, QueryComponent, MessageComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
