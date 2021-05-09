import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithoutCardComponent } from './list-without-card.component';

describe('ListWithoutCardComponent', () => {
  let component: ListWithoutCardComponent;
  let fixture: ComponentFixture<ListWithoutCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithoutCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
