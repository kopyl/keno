import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hand-switch-button',
  templateUrl: './hand-switch.component.html',
  styleUrls: ['./hand-switch.component.sass']
})
export class HandSwitchButton implements OnInit {

  constructor() { }

  text: string = "test"

  ngOnInit(): void {
  }

}
