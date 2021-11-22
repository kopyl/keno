import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPage } from './buttons-page.component';

describe('ButtonsPage', () => {
  let component: ButtonsPage;
  let fixture: ComponentFixture<ButtonsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
