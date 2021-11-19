import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagerSelect } from './wager-select.component';

describe('WagerSelect', () => {
  let component: WagerSelect;
  let fixture: ComponentFixture<WagerSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagerSelect ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
