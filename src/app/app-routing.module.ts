import { CardsService } from './cards/cards.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cards', resolve: { special: CardsService}, loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'subtypes', loadChildren: './subtypes/subtypes.module#SubtypesPageModule' },
  { path: 'cards/card-details/:cardid', loadChildren: './card-details/card-details.module#CardDetailsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
