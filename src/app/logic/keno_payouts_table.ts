

interface payTable {
    classic: Array<Array<number>>,
    lastBall: Array<number>
}

type stat = Array<statSingle>

interface statSingle {
    win?: boolean
    picked?: number,
    matched?: number,
    coeff: number,
    amountBet?: number
    amountWin: number,
}


const payTable: payTable = {
    classic: [
        [0],
        [0, 3],
        [0, 1, 10],
        [0, 0, 2, 45],
        [0, 0, 1, 10, 100],
        [0, 0, 1, 3, 20, 200],
        [0, 0, 0, 2, 15, 60, 550],
        [1, 0, 0, 2, 4, 15, 80, 1500],
        [1, 0, 0, 0, 5, 10, 50, 500, 2500],
        [2, 0, 0, 0, 2, 10, 25, 125, 1000, 10_000],
        [2, 0, 0, 0, 0, 5, 30, 100, 300, 5000, 20_000]
    ],
    lastBall: [
        0, 60, 30, 20, 15, 12, 10, 8, 7, 6, 5
    ]
}




/** Takes
_amountOfNUmbersPicked: number,
_amountOfMoneyBet: number,
?detailedInfo: bool

Calculates
possible coefficients,
possible amounts – amount of money can win

Produces
stat – statistic with calculation

Recalculates [Calculates, Produces] on setting
amountOfNUmbersPicked,
amountOfMoneyBet
*/
class Bet {

    public coefficients: Array<number>
    public amounts: Array<number>
    public stat: stat
    public statSingular: statSingle = {
        win: false,
        coeff: 0,
        amountBet: 0,
        amountWin: 0,
        picked: 0,
    }

    constructor(
        public _amountOfMoneyBet: number = 0,
        public _amountOfNUmbersPicked: number = 0,
        public detailedInfo: boolean = true,
    ) {
        this.recalculate()
        if (this.constructor.name == "Classic") {
            this.statSingular['matched'] = 0
        }
    }

    public setCoefficients() {}

    public recalculate() {
        this.setCoefficients()
        this.amounts = this.coefficients.map(
            (e: number) => e*this._amountOfMoneyBet
        )
        this.createStat()
    }



    set amountOfMoneyBet(amount: number) {
        this._amountOfMoneyBet = amount
        this.recalculate()
    }

    get amountOfMoneyBet() {
        return this._amountOfMoneyBet
    }

    public createStat() {
        const stat: stat = []
        for (let coeffIndex = 0; coeffIndex < this.coefficients.length; coeffIndex++) {
            const statSingular: statSingle = {...this.statSingular}
            if (this.constructor.name == "Classic") {
                statSingular['matched'] = coeffIndex
                if (this.detailedInfo) {
                    statSingular['picked'] = this._amountOfNUmbersPicked
                }
            } else {
                statSingular['picked'] = coeffIndex
            }
            statSingular['coeff'] = this.coefficients[coeffIndex]
            statSingular['amountWin'] = this.amounts[coeffIndex]
            if (this.detailedInfo) {
                statSingular['amountBet'] = this._amountOfMoneyBet
                statSingular['win'] = Boolean(statSingular['amountWin'])
            }
            stat.push(statSingular)
        }
        this.stat = stat
    }
}


class Classic extends Bet {

    public setCoefficients() {
        this.coefficients = payTable.classic[
            this._amountOfNUmbersPicked
        ]
    }

    set amountOfNUmbersPicked(amount: number) {
        this._amountOfNUmbersPicked = amount
        this.recalculate()
    }

    get amountOfNUmbersPicked() {
        return this._amountOfNUmbersPicked
    }
}


class LastBall extends Bet {

    public setCoefficients() {
        this.coefficients = payTable.lastBall
    }
}




// const classicBet = new Classic(1100, 6)
const lastBallBet = new LastBall(1100)

// lastBallBet.amountOfMoneyBet = 100



// classicBet.coefficients //?
// classicBet.amounts //?
// classicBet.amountOfMoneyBet = 50000
// classicBet.amounts //?


console.log(lastBallBet.stat)

// console.log(classicBet.stat)


// classicBet.amountOfNUmbersPicked = 10

// classicBet.stat //?


// classicBet //?






// const lastBallBet = new LastBall(1100) //?

// lastBallBet //?
// lastBallBet.amountOfMoneyBet = 140
// lastBallBet //?

