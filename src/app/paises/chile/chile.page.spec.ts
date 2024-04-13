import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChilePage } from './chile.page';

describe('ChilePage', () => {
  let component: ChilePage;
  let fixture: ComponentFixture<ChilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
