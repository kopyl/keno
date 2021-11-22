import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WagerSelect } from './wager-select/wager-select.component';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { IconsModule } from './modules/icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { WagerSelectPage } from './pages/wager-select-page/wager-select-page.component'

@NgModule({
  declarations: [
    AppComponent,
    WagerSelect,
    WagerSelectPage,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    IconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
