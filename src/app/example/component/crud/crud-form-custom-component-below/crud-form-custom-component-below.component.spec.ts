import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormCustomComponentBelowComponent } from './crud-form-custom-component-below.component';

describe('CrudFormCustomComponentBelowComponent', () => {
  let component: CrudFormCustomComponentBelowComponent;
  let fixture: ComponentFixture<CrudFormCustomComponentBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormCustomComponentBelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormCustomComponentBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
