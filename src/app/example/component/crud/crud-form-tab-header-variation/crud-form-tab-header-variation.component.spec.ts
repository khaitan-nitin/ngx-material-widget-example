import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormTabHeaderVariationComponent } from './crud-form-tab-header-variation.component';

describe('CrudFormTabHeaderVariationComponent', () => {
  let component: CrudFormTabHeaderVariationComponent;
  let fixture: ComponentFixture<CrudFormTabHeaderVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormTabHeaderVariationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormTabHeaderVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
