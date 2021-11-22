import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../../../config.service'

@Component({
    selector: 'wager-select-item',
    templateUrl: './wager-select-item.component.html',
    styleUrls: ['./wager-select-item.component.sass']
})
export class WagerSelectItem implements OnInit {

    @Input() value: number
    @Input() selected: Boolean = false
    @Input() index: number = 0

    constructor(private config: ConfigService) { }

    ngOnInit(): void {}

    @Output() hideModalEvent = new EventEmitter()

    select() {
        this.config.changeWagerSelectValue(this.index)
        this.hideModalEvent.emit()
    }

}
