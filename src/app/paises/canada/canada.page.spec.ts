import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanadaPage } from './canada.page';

describe('CanadaPage', () => {
  let component: CanadaPage;
  let fixture: ComponentFixture<CanadaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CanadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
