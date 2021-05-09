import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudListCustomComponentBelowComponent } from './crud-list-custom-component-below.component';

describe('CrudListCustomComponentBelowComponent', () => {
  let component: CrudListCustomComponentBelowComponent;
  let fixture: ComponentFixture<CrudListCustomComponentBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudListCustomComponentBelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListCustomComponentBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
