import { WagerSelect } from './wager-select/wager-select.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'KenoFrontend';

  @ViewChild('ws') wagerSelect: any

  showWagerselect(){
      this.wagerSelect.show()
  }
}
