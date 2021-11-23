import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigButton } from './big.component';

describe('BigButton', () => {
  let component: BigButton;
  let fixture: ComponentFixture<BigButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigButton ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
