import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBody } from './play-list-body';
import { OrderListPipe } from '@shared/pipe/order-list-pipe';

describe('PlayListBody', () => {
  let component: PlayListBody;
  let fixture: ComponentFixture<PlayListBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayListBody, OrderListPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayListBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
