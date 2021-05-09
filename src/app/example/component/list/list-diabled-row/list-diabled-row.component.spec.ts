import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiabledRowComponent } from './list-diabled-row.component';

describe('ListDiabledRowComponent', () => {
  let component: ListDiabledRowComponent;
  let fixture: ComponentFixture<ListDiabledRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDiabledRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiabledRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
