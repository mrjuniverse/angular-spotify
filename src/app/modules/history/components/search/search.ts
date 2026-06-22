import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {

  @Output() callBackData: EventEmitter<any> = new EventEmitter

  src: string = ''

  constructor() {}

  ngOnInit(): void {
    
  }

  callSearch(term: string): void{

    this.callBackData.emit(term)

  }
}
