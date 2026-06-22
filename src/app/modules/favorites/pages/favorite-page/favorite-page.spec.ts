import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePage } from './favorite-page';

describe('HistoryPage', () => {
  let component: FavoritePage;
  let fixture: ComponentFixture<FavoritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritePage],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
