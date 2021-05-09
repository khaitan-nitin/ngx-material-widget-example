import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiImageComponent } from './multi-image.component';

describe('MultiImageComponent', () => {
  let component: MultiImageComponent;
  let fixture: ComponentFixture<MultiImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
