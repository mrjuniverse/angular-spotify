import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  standalone: false,
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage implements OnInit {

  listResults: TrackModel[] = []

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    
  }

  receiveData(event: string): void{
    this.searchService.searchTracks$(event)
    .subscribe(({ data }) => {
      this.listResults= data
    })
  }
}
