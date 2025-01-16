import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LandingComponent } from './landing/landing.component';
import { CategoryComponent } from './category/category.component';
import { BestResponseComponent } from './best-response/best-response.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    AboutComponent,
    HowToPlayComponent,
    LandingComponent,
    CategoryComponent,
    BestResponseComponent,
    FlipCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
