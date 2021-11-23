import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config.service'

@Component({
  selector: 'big-button',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.sass']
})
export class BigButton implements OnInit {

  constructor(private config: ConfigService) { }

  public text: string = this.config.translations.betButton

  ngOnInit(): void {
  }

}
