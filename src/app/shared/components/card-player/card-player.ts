import { Component, Input, input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  standalone: false,
  templateUrl: './card-player.html',
  styleUrl: './card-player.css',
})
export class CardPlayer  implements OnInit {

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', album:'', url:'', cover:'' };

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    
  }

  sendPlay(track:TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }
}
