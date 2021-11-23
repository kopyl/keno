import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service'

@Component({
  selector: 'clear-button',
  templateUrl: './clear.component.html',
  styleUrls: ['./clear.component.sass']
})
export class ClearButton implements OnInit {

  constructor(private config: ConfigService) { }

  public text: string = this.config.translations.clearButton

  ngOnInit(): void {
  }

}
