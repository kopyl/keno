import { WagerSelect } from '../../wager-select/wager-select.component';
import { Component, ViewChild } from '@angular/core';
// import { ClearComponent } from './modules/buttons/clear/clear.component'

@Component({
  selector: 'app-root',
  templateUrl: './wager-select-page.component.html',
  styleUrls: ['./wager-select-page.component.sass']
})
export class WagerSelectPage {
  title = 'KenoFrontend';

  @ViewChild('ws') wagerSelect: WagerSelect

  showWagerselect(){
      this.wagerSelect.show()
  }
}
