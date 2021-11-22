import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WagerSelectPage } from './pages/wager-select-page/wager-select-page.component'

const routes: Routes = [
    {path: 'wager-select', component: WagerSelectPage}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
