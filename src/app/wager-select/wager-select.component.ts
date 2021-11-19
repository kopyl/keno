import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from '../config.service'
import * as type from '../types';

@Component({
    selector: 'wager-select',
    templateUrl: './wager-select.component.html',
    styleUrls: ['./wager-select.component.sass'],
})
export class WagerSelect implements OnInit {


    constructor(
        private config: ConfigService,
    ) {}

    @ViewChild('HTML') HTML: ElementRef

    options: Array<type.option> = this.config.wagerSelect.options
    selected: number = this.config.wagerSelect.selected
    currency: string = this.config.currency

    isHidden: boolean = false  // CSS hiding
    isInDom: boolean = true  // Removing from DOM
    scrollTop: number = 0

    ngOnInit(): void {}

    show() {
        this.isInDom = true
        setTimeout(() => {
            this.isHidden = false

            this.HTML.nativeElement
            .scrollTop = this.scrollTop
        },
        200)
    }

    saveScrollPosition() {
        this.scrollTop = this.HTML
        .nativeElement.scrollTop
    }

    hide(bySelecting: boolean) {
        this.saveScrollPosition()

        if (bySelecting) {
            setTimeout(() => this.isHidden = true, 200)
            // to show visual feedback
        } else {
            this.isHidden = true
        }
        setTimeout(() => this.isInDom = false, 500)
    }

}
