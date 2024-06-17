import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComidasPorCategoriaPage } from './comidas-por-tipo.page';

describe('ComidasPorCategoriaPage', () => {
  let component: ComidasPorCategoriaPage;
  let fixture: ComponentFixture<ComidasPorCategoriaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidasPorCategoriaPage],
    });
    fixture = TestBed.createComponent(ComidasPorCategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
