import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticListWithFilterComponent } from './static-list-with-filter.component';

describe('StaticListWithFilterComponent', () => {
  let component: StaticListWithFilterComponent;
  let fixture: ComponentFixture<StaticListWithFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticListWithFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticListWithFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
