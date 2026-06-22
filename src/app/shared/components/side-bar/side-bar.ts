import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: false,
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar implements OnInit{
  
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  
  customOptions: Array<any> = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/',]
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu Biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista °1',
        router: ['/']
      },
      {
        name: 'Mi lista °2',
        router: ['/']
      },
      {
        name: 'Mi lista °3',
        router: ['/']
      },
      {
        name: 'Mi lista °4',
        router: ['/']
      }
    ]
  }

  goTo(router: string[]): void {
    this.router.navigate(router)
  }
}
