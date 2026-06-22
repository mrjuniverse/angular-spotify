import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  standalone: false,
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css',
})
export class TracksPage implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<void>{
    this.tracksTrending = await firstValueFrom(this.trackService.getAllTracks$())
    this.tracksRandom = await firstValueFrom(this.trackService.getAllTracks$())
    this.cdr.detectChanges()
  }

  loadDataRandom(): void {
    //this.trackService.getAllRandom$()
    //  .subscribe((response: TrackModel[]) => {
    //    this.tracksRandom = response
    //}, err => {
    //  console.log('Error de conexión');
    //})
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((sub => sub.unsubscribe()))
  }
}