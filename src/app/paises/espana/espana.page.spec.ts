import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspanaPage } from './espana.page';

describe('EspanaPage', () => {
  let component: EspanaPage;
  let fixture: ComponentFixture<EspanaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
