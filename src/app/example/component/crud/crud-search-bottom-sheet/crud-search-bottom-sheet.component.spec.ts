import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSearchBottomSheetComponent } from './crud-search-bottom-sheet.component';

describe('CrudSearchBottomSheetComponent', () => {
  let component: CrudSearchBottomSheetComponent;
  let fixture: ComponentFixture<CrudSearchBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSearchBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSearchBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
