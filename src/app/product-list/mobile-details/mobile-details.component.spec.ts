import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDetailsComponent } from './mobile-details.component';

describe('MobileDetailsComponent', () => {
  let component: MobileDetailsComponent;
  let fixture: ComponentFixture<MobileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
