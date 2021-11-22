import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { IconsModule } from './modules/icons/icons.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    IconsModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
