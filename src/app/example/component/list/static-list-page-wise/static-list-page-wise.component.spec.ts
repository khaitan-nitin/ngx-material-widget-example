import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticListPageWiseComponent } from './static-list-page-wise.component';

describe('StaticListPageWiseComponent', () => {
  let component: StaticListPageWiseComponent;
  let fixture: ComponentFixture<StaticListPageWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticListPageWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticListPageWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
