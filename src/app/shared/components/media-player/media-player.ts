import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer implements OnInit, OnDestroy {

  mockCover : TrackModel = {
    cover: 'https://yt3.googleusercontent.com/sTH7_KOIFLSzln5qXo4EY9D6zjcjUNmlCXCASkEIomFrMjpWZzSjKrOoFJCmd4hPtv7lljbF5Zhk7hmYkw',
    album: 'Reborn Superstar!',
    name: 'Hanabie',
    url: 'https://music.youtube.com/watch?v=hCSLTiBIVtU&list=PLzNC25-5rv8rlliDwwDBEHgh29YjlNleN',
    _id: 1
  }

  listObservers$: Array<Subscription> = []

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo canción......', response)
      }
    )

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}
