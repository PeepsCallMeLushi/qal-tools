export class CalculationRow {
    constructor(public materialType = 1,
                public materialQuantity = 0,
                public howManyCharactersNeedIt = 0,
                public timeUnit = 1,
                public timeType = 1) {
        this.materialType = materialType
        this.materialQuantity = materialQuantity;
        this.howManyCharactersNeedIt = howManyCharactersNeedIt;
        this.timeUnit = timeUnit;
        this.timeType = timeType;           
    }
}