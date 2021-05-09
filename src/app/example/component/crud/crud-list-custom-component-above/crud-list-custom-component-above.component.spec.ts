import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudListCustomComponentAboveComponent } from './crud-list-custom-component-above.component';

describe('CrudListCustomComponentAboveComponent', () => {
  let component: CrudListCustomComponentAboveComponent;
  let fixture: ComponentFixture<CrudListCustomComponentAboveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudListCustomComponentAboveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListCustomComponentAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
