import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamiliaDetalhePage } from './familia-detalhe.page';

describe('FamiliaDetalhePage', () => {
  let component: FamiliaDetalhePage;
  let fixture: ComponentFixture<FamiliaDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliaDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
