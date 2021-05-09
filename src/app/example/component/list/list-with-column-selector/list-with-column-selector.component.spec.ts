import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithColumnSelectorComponent } from './list-with-column-selector.component';

describe('ListWithColumnSelectorComponent', () => {
  let component: ListWithColumnSelectorComponent;
  let fixture: ComponentFixture<ListWithColumnSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithColumnSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithColumnSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
