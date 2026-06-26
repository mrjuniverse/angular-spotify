import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer implements OnInit, OnDestroy {

  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$
    .subscribe(status => this.state = status)

    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }

  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = event.currentTarget as HTMLElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    //console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)
  }

  setVolume(event: Event): void {
    const input = event.target as HTMLInputElement
    this.multimediaService.setVolume(Number(input.value))
  }

  toggleMute(): void {
    this.multimediaService.toggleMute()
  }

  getVolumeIcon(): string {
    const volume = this.multimediaService.volume$.value
    if (volume === 0) return 'uil-volume-mute'
    if (volume < 50) return 'uil-volume-down'
    return 'uil-volume-up'
  }
}