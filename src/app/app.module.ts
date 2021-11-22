import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WagerSelect } from './wager-select/wager-select.component';
import { WagerSelectItem } from './wager-select-item/wager-select-item.component';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { IconsModule } from './modules/icons/icons.module'

@NgModule({
  declarations: [
    AppComponent,
    WagerSelect,
    WagerSelectItem,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
