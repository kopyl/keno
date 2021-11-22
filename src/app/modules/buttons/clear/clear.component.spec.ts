import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearButton } from './clear.component';

describe('ClearButton', () => {
  let component: ClearButton;
  let fixture: ComponentFixture<ClearButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
