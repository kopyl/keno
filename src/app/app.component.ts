import { WagerSelect } from './wager-select/wager-select.component';
import { Component, ViewChild } from '@angular/core';
// import { ClearComponent } from './modules/buttons/clear/clear.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'KenoFrontend';

  @ViewChild('ws') wagerSelect: WagerSelect

  showWagerselect(){
      this.wagerSelect.show()
  }
}
