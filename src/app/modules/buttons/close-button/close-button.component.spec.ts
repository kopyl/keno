import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseButton } from './close-button.component';

describe('CloseButton', () => {
  let component: CloseButton;
  let fixture: ComponentFixture<CloseButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
