import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagerSelectPage } from './pages/wager-select-page/wager-select-page.component'
import { ButtonsPage } from './pages/buttons-page/buttons-page.component'

const routes: Routes = [
    { path: 'wager-select', component: WagerSelectPage },
    { path: 'buttons', component: ButtonsPage },
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
