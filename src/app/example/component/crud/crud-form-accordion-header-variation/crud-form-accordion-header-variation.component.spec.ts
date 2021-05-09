import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormAccordionHeaderVariationComponent } from './crud-form-accordion-header-variation.component';

describe('CrudFormAccordionHeaderVariationComponent', () => {
  let component: CrudFormAccordionHeaderVariationComponent;
  let fixture: ComponentFixture<CrudFormAccordionHeaderVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormAccordionHeaderVariationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormAccordionHeaderVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
