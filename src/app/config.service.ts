import { Injectable } from '@angular/core';
import * as type from './types';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    userSettings: any = {
        animation: true,
        sound: true,
        music: true,
    }

    currency: string
    language: string
    wagerSelect: any
    translations: type.translations

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
        this.wagerSelect.options = (
            this.wagerSelect.options
            .map((e: type.option) => {
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
        this.getConfigFromBackend()
        this.setupWagerSelect()
    }

    getConfigFromBackend() {
        // REPLACE WITH REAL COMFIG FROM BACKEND
        const backend: type.backend = {
            currency: "BTC",
            language: "en",
            wagerSelect: {
                selected: 0,
                options: [
                    0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7,
                    0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4,
                    1.5, 1.6, 1.7, 2.00000001
                ]
            },
            translations: {
                betButton: "Bet",
                clearButton: "Clear"
            }
        }
        this.wagerSelect = backend.wagerSelect
        this.currency = backend.currency
        this.language = backend.language
        this.translations = backend.translations
    }
}
