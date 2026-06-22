import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './components/side-bar/side-bar';
import { MediaPlayer } from './components/media-player/media-player';
import { HeaderUser } from './components/header-user/header-user';
import { AppRoutingModule } from 'src/app/app-routing-module';
import { CardPlayer } from './components/card-player/card-player';
import { SectionGeneric } from './components/section-generic/section-generic';
import { PlayListHeader } from './components/play-list-header/play-list-header';
import { PlayListBody } from './components/play-list-body/play-list-body';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list-pipe';
import { ImgBroken } from './directives/img-broken';

@NgModule({
  declarations: [
    SideBar,
    MediaPlayer,
    HeaderUser,
    CardPlayer,
    SectionGeneric,
    PlayListHeader,
    PlayListBody,
    OrderListPipe,
    ImgBroken,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideBar,
    MediaPlayer,
    HeaderUser,
    CardPlayer,
    SectionGeneric,
    PlayListHeader,
    PlayListBody,
    OrderListPipe,
    ImgBroken
  ],
})
export class SharedModule {}
