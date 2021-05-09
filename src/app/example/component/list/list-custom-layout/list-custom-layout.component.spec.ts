import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomLayoutComponent } from './list-custom-layout.component';

describe('ListCustomLayoutComponent', () => {
  let component: ListCustomLayoutComponent;
  let fixture: ComponentFixture<ListCustomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
