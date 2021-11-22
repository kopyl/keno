import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagerSelectPage } from './wager-select-page.component';

describe('WagerSelectPage', () => {
  let component: WagerSelectPage;
  let fixture: ComponentFixture<WagerSelectPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagerSelectPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
