import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithoutFooterComponent } from './list-without-footer.component';

describe('ListWithoutFooterComponent', () => {
  let component: ListWithoutFooterComponent;
  let fixture: ComponentFixture<ListWithoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithoutFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
