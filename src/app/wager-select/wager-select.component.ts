import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

@Component({
    selector: 'wager-select',
    templateUrl: './wager-select.component.html',
    styleUrls: ['./wager-select.component.sass'],
})
export class WagerSelect implements OnInit {


    constructor(private config: ConfigService) { }

    options: Array<any> = this.config.wagerSelect.options
    selected: number = this.config.wagerSelect.selected
    currency: string = this.config.currency

    isHidden: boolean = false  // CSS hiding
    isInDom: boolean = true  // Removing from DOM


    ngOnInit(): void {}

    hide(bySelecting: boolean) {
        if (bySelecting) {
            setTimeout(() => this.isHidden = true, 200)
            // to show visual feedback
        } else {
            this.isHidden = true
        }
        setTimeout(() => this.isInDom = false, 500)
    }

}
