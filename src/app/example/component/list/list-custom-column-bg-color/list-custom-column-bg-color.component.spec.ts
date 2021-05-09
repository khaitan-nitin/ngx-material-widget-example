import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomColumnBgColorComponent } from './list-custom-column-bg-color.component';

describe('ListCustomColumnBgColorComponent', () => {
  let component: ListCustomColumnBgColorComponent;
  let fixture: ComponentFixture<ListCustomColumnBgColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomColumnBgColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomColumnBgColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
