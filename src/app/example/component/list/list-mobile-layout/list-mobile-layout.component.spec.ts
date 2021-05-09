import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobileLayoutComponent } from './list-mobile-layout.component';

describe('ListMobileLayoutComponent', () => {
  let component: ListMobileLayoutComponent;
  let fixture: ComponentFixture<ListMobileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMobileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
