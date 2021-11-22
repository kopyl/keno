import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsPage } from './buttons-page/buttons-page.component';
import { WagerSelectPage } from './wager-select-page/wager-select-page.component';
import { WagerSelect } from '../wager-select/wager-select.component';
import { ButtonsModule } from '../modules/buttons/buttons.module';




@NgModule({
  declarations: [
    ButtonsPage,
    WagerSelectPage,
    WagerSelect
  ],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [
    ButtonsPage,
    WagerSelectPage
  ]
})
export class PagesModule { }
