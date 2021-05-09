import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormAccordionComponent } from './crud-form-accordion.component';

describe('CrudFormAccordionComponent', () => {
  let component: CrudFormAccordionComponent;
  let fixture: ComponentFixture<CrudFormAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
