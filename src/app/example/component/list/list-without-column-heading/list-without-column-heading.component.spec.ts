import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithoutColumnHeadingComponent } from './list-without-column-heading.component';

describe('ListWithoutColumnHeadingComponent', () => {
  let component: ListWithoutColumnHeadingComponent;
  let fixture: ComponentFixture<ListWithoutColumnHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithoutColumnHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithoutColumnHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
