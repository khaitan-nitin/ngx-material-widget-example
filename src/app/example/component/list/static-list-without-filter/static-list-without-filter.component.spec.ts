import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticListWithoutFilterComponent } from './static-list-without-filter.component';

describe('StaticListWithoutFilterComponent', () => {
  let component: StaticListWithoutFilterComponent;
  let fixture: ComponentFixture<StaticListWithoutFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticListWithoutFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticListWithoutFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
