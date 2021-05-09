import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeaderVariationComponent } from './list-header-variation.component';

describe('ListHeaderVariationComponent', () => {
  let component: ListHeaderVariationComponent;
  let fixture: ComponentFixture<ListHeaderVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHeaderVariationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeaderVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
