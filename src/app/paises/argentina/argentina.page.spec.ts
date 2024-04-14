import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArgentinaPage } from './argentina.page';

describe('ArgentinaPage', () => {
  let component: ArgentinaPage;
  let fixture: ComponentFixture<ArgentinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArgentinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
