import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomRowBgColorComponent } from './list-custom-row-bg-color.component';

describe('ListCustomRowBgColorComponent', () => {
  let component: ListCustomRowBgColorComponent;
  let fixture: ComponentFixture<ListCustomRowBgColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomRowBgColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomRowBgColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
