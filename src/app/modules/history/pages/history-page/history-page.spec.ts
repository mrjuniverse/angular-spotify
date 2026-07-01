import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Search } from '@modules/history/components/search/search';
import { HistoryPage } from './history-page';
import { FormsModule } from '@angular/forms';
import { PlayListBody } from '@shared/components/play-list-body/play-list-body';
import { OrderListPipe } from '@shared/pipe/order-list-pipe';

describe('HistoryPage', () => {
  let component: HistoryPage;
  let fixture: ComponentFixture<HistoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HistoryPage, Search, PlayListBody, OrderListPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
