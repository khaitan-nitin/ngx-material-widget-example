import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHoverRowShadeComponent } from './list-hover-row-shade.component';

describe('ListHoverRowShadeComponent', () => {
  let component: ListHoverRowShadeComponent;
  let fixture: ComponentFixture<ListHoverRowShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHoverRowShadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHoverRowShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
