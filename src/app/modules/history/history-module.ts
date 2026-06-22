import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing-module';
import { HistoryPage } from './pages/history-page/history-page';
import { SharedModule } from "@shared/shared-module";
import { Search } from './components/search/search';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    HistoryPage,
    Search,
  ],

  imports: [CommonModule, HistoryRoutingModule, SharedModule, FormsModule]
})
export class HistoryModule {}
