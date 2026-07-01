import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritePage } from './favorite-page';
import { PlayListHeader } from '@shared/components/play-list-header/play-list-header';
import { PlayListBody } from '@shared/components/play-list-body/play-list-body';
import { OrderListPipe } from '@shared/pipe/order-list-pipe';

describe('FavoritePage', () => {
  let component: FavoritePage;
  let fixture: ComponentFixture<FavoritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [FavoritePage, PlayListHeader, PlayListBody, OrderListPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
