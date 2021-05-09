import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSearchRightModalComponent } from './crud-search-right-modal.component';

describe('CrudSearchRightModalComponent', () => {
  let component: CrudSearchRightModalComponent;
  let fixture: ComponentFixture<CrudSearchRightModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSearchRightModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSearchRightModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
