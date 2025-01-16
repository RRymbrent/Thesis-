import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { AboutComponent } from './about/about.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { CategoryComponent } from './category/category.component';
import { BestResponseComponent } from './best-response/best-response.component';
import { FlipCardsComponent } from './flip-cards/flip-cards.component';

const routes: Routes = [
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'play', component: PlayComponent},
  {path: 'about', component: AboutComponent},
  {path: 'how-to-play', component: HowToPlayComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'best-response', component: BestResponseComponent},
  {path: 'flip-cards', component: FlipCardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
