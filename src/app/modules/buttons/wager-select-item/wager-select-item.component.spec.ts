import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagerSelectItem } from './wager-select-item.component';

describe('WagerSelectItemComponent', () => {
  let component: WagerSelectItem;
  let fixture: ComponentFixture<WagerSelectItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagerSelectItem ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerSelectItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
