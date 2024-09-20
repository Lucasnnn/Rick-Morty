import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountFavoritesComponent } from './count-favorites.component';

describe('CountFavoritesComponent', () => {
  let component: CountFavoritesComponent;
  let fixture: ComponentFixture<CountFavoritesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountFavoritesComponent]
    });
    fixture = TestBed.createComponent(CountFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
