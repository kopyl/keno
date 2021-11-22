import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearButton } from './clear/clear.component';
import { CloseButton } from './close-button/close-button.component';
import { WagerSelectItem } from './wager-select-item/wager-select-item.component';



@NgModule({
  declarations: [
    ClearButton,
    CloseButton,
    WagerSelectItem
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClearButton,
    CloseButton,
    WagerSelectItem
  ]
})
export class ButtonsModule { }
