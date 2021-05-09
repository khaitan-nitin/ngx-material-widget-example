import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSearchLeftModalComponent } from './crud-search-left-modal.component';

describe('CrudSearchLeftModalComponent', () => {
  let component: CrudSearchLeftModalComponent;
  let fixture: ComponentFixture<CrudSearchLeftModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSearchLeftModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSearchLeftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
