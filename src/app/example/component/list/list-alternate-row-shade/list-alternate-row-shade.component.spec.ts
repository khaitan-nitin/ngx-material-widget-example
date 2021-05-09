import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlternateRowShadeComponent } from './list-alternate-row-shade.component';

describe('ListAlternateRowShadeComponent', () => {
  let component: ListAlternateRowShadeComponent;
  let fixture: ComponentFixture<ListAlternateRowShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlternateRowShadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAlternateRowShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
