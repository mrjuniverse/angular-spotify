import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: false,
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage implements OnInit {

  listResults$: Observable<any> = of([])

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}
