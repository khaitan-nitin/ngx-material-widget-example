import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormTabComponent } from './crud-form-tab.component';

describe('CrudFormTabComponent', () => {
  let component: CrudFormTabComponent;
  let fixture: ComponentFixture<CrudFormTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFormTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
