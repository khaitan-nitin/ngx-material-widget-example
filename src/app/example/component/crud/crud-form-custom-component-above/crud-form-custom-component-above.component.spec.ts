import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormCustomComponentAboveComponent } from './crud-form-custom-component-above.component';

describe('CrudFormCustomComponentAboveComponent', () => {
  let component: CrudFormCustomComponentAboveComponent;
  let fixture: ComponentFixture<CrudFormCustomComponentAboveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormCustomComponentAboveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormCustomComponentAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
