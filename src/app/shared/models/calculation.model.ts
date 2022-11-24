export class CalculationModel {
    constructor(public totalMaterial = 0,
                public materialPerTime = 0) {
        this.totalMaterial = totalMaterial;
        this.materialPerTime = materialPerTime;
    }
}