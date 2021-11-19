import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {


    backend: any = {
        currency: "BTC",
        language: "en",
        wagerSelect: {
            selected: 0,
            options: [
                {value: 0.1, selected: true},
                {value: 0.2, selected: false},
                {value: 0.3, selected: false},
                {value: 0.4, selected: false},
                {value: 0.5, selected: false},
                {value: 0.6, selected: false},
                {value: 0.7, selected: false},
                {value: 0.8, selected: false},
                {value: 0.9, selected: false},
                {value: 1.0, selected: false},
                {value: 1.1, selected: false},
                {value: 1.2, selected: false},
                {value: 1.3, selected: false},
                {value: 1.4, selected: false},
                {value: 1.5, selected: false},
                {value: 1.6, selected: false},
                {value: 1.7, selected: false},
                {value: 2.00000001, selected: false},
            ]
        }
    }

    currency: string = this.backend.currency
    language: string = "en"
    wagerSelect: any

    changeWagerSelectValue(index: number) {

        for (
            const option of
            this.wagerSelect.options
        ) {
                option.selected = false
                if (option.index == index) {
                    this.wagerSelect.selected = index
                    option.selected = true
                }
            }
    }

    setupWagerSelect() {
        this.wagerSelect = this.backend.wagerSelect

        let number = 0
        for (const option of this.wagerSelect.options) {
            option.index = number
            number++
        }
        // console.log(this.wagerSelect.options)
    }

    constructor() {
        this.fetchConfigFromBackend()
        this.currency = this.backend.currency
        this.language = this.backend.language
        this.setupWagerSelect()
    }

    fetchConfigFromBackend() {}
}
