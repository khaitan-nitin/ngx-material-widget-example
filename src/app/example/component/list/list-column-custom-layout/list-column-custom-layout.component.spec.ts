import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColumnCustomLayoutComponent } from './list-column-custom-layout.component';

describe('ListColumnCustomLayoutComponent', () => {
  let component: ListColumnCustomLayoutComponent;
  let fixture: ComponentFixture<ListColumnCustomLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListColumnCustomLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColumnCustomLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
