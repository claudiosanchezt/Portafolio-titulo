import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComidasPorPaisNombrePage } from './comidas-por-pais-nombre.page';

describe('ComidasPorPaisNombrePage', () => {
  let component: ComidasPorPaisNombrePage;
  let fixture: ComponentFixture<ComidasPorPaisNombrePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidasPorPaisNombrePage],
    });
    fixture = TestBed.createComponent(ComidasPorPaisNombrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
