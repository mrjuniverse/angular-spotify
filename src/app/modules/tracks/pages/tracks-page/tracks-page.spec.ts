import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TracksPage } from './tracks-page';
import { CommonModule } from '@angular/common';
import { SectionGeneric } from '@shared/components/section-generic/section-generic';
import { CardPlayer } from '@shared/components/card-player/card-player';
import { ImgBroken } from '@shared/directives/img-broken';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TracksPage', () => {
  let component: TracksPage;
  let fixture: ComponentFixture<TracksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      declarations: [TracksPage, SectionGeneric, CardPlayer, ImgBroken],
    }).compileComponents();

    fixture = TestBed.createComponent(TracksPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
