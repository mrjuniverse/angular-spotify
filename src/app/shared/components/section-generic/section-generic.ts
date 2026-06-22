import { Component, Input, input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.models';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css',
})
export class SectionGeneric implements OnInit {

  @Input() title: String = ''
  @Input() mode: 'small' | 'big' = 'big'
  @Input() dataTracks: Array<TrackModel> = []

  constructor() {}

  ngOnInit(): void {
    
  }
}
