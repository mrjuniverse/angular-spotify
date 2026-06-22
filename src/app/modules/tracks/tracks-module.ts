import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing-module';
import { TracksPage } from './pages/tracks-page/tracks-page';
import { SharedModule } from '@shared/shared-module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TracksPage],
  imports: [CommonModule, TracksRoutingModule, SharedModule, HttpClientModule],
})
export class TracksModule {}
