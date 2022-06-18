import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListComponent } from './laptop-list.component';

describe('LaptopListComponent', () => {
  let component: LaptopListComponent;
  let fixture: ComponentFixture<LaptopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
