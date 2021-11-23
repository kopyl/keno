import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandSwitchComponent } from './hand-switch.component';

describe('HandSwitchComponent', () => {
  let component: HandSwitchComponent;
  let fixture: ComponentFixture<HandSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
