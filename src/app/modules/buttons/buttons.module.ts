import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearButton } from './clear/clear.component';
import { CloseButton } from './close-button/close-button.component';
import { WagerSelectItem } from './wager-select-item/wager-select-item.component';
import { BigButton } from './big/big.component';
import { HandSwitchButton } from './hand-switch/hand-switch.component';



@NgModule({
  declarations: [
    ClearButton,
    CloseButton,
    WagerSelectItem,
    BigButton,
    HandSwitchButton
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClearButton,
    CloseButton,
    WagerSelectItem,
    BigButton,
    HandSwitchButton
  ]
})
export class ButtonsModule { }
