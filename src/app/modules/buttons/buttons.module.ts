import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearButton } from './clear/clear.component';
import { CloseButton } from './close-button/close-button.component';



@NgModule({
  declarations: [
    ClearButton,
    CloseButton
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClearButton,
    CloseButton
  ]
})
export class ButtonsModule { }
