import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {


    backend: any = {
        currency: "BTC",
        language: "en",
        wagerSelect: {
            selected: 10,
            options: [
                0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7,
                0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4,
                1.5, 1.6, 1.7, 2.00000001
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
        this.wagerSelect.options = (
            this.wagerSelect.options
            .map((e: any) => {
                return {value: e, selected: false}
            })
        )

        let number = 0
        for (const option of this.wagerSelect.options) {
            if (number == this.wagerSelect.selected) {
                option.selected = true
            }
            option.index = number
            number++
        }
    }

    constructor() {
        this.fetchConfigFromBackend()
        this.currency = this.backend.currency
        this.language = this.backend.language
        this.setupWagerSelect()
    }

    fetchConfigFromBackend() {}
}
