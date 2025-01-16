import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BestResponseComponent } from './best-response/best-response.component';
import { CategoryComponent } from './category/category.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LandingComponent } from './landing/landing.component';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BestResponseComponent,
    CategoryComponent,
    FlipCardsComponent,
    HowToPlayComponent,
    LandingComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
