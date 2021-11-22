import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WagerSelect } from './wager-select/wager-select.component';
import { WagerSelectItem } from './wager-select-item/wager-select-item.component';
import { CloseButton } from './close-button/close-button.component';
import { ButtonsModule } from './modules/buttons/buttons.module'

@NgModule({
  declarations: [
    AppComponent,
    WagerSelect,
    WagerSelectItem,
    CloseButton,
  ],
  imports: [
    BrowserModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
