import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MexicoPage } from './mexico.page';

describe('MexicoPage', () => {
  let component: MexicoPage;
  let fixture: ComponentFixture<MexicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MexicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
