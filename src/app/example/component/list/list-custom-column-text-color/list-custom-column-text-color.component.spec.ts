import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomColumnTextColorComponent } from './list-custom-column-text-color.component';

describe('ListCustomColumnTextColorComponent', () => {
  let component: ListCustomColumnTextColorComponent;
  let fixture: ComponentFixture<ListCustomColumnTextColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomColumnTextColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomColumnTextColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
