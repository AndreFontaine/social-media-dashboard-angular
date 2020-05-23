import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card.component';
import { HeaderComponent } from './components/header.component';
import { CardListComponent } from './components/card-list.component';
import { CardSmallListComponent } from './components/card-small-list.component';
import { CardSmallComponent } from './components/card-small.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardSmallListComponent,
    CardSmallComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
