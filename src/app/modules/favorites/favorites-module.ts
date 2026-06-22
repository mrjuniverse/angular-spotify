import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing-module';
import { FavoritePage } from './pages/favorite-page/favorite-page';
import { SharedModule } from '@shared/shared-module';

@NgModule({
  declarations: [FavoritePage],
  imports: [CommonModule, FavoritesRoutingModule, SharedModule],
})
export class FavoritesModule {}
