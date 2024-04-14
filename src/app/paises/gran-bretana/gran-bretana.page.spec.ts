import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GranBretanaPage } from './gran-bretana.page';

describe('GranBretanaPage', () => {
  let component: GranBretanaPage;
  let fixture: ComponentFixture<GranBretanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GranBretanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
