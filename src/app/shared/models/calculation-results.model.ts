export class CalculationResults {
    constructor(public seconds = 0,
                public minutes = 0,
                public hours = 0,
                public days = 0,
                public months = 0,
                public years = 0,) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
    this.days = days;
    this.months = months;
    this.years = years;
                }

    public toString(): string {
        const y = this.years > 0 ? this.years + ` year${this.years !== 1 ? 's' : ''}, ` : '';
        const M = this.months > 0 || this.years > 0 ? this.months + ` month${this.months !== 1 ? 's' : ''}, ` : '';
        const d = this.days > 0 || this.years > 0 || this.months > 0 ? this.days + ` day${this.days !== 1 ? 's' : ''}, ` : '';
        const h = this.hours > 0 || this.years > 0 || this.months > 0 || this.days > 0 ? this.hours + ` hour${this.hours !== 1 ? 's' : ''}, ` : ''
        const m = this.minutes > 0 || this.years > 0 || this.months > 0 || this.days > 0 || this.hours > 0 ? this.minutes + ` minute${ this.minutes !== 1 ? 's':''}, ` : '';
        const s = this.seconds + ` second${this.seconds !== 1 ? 's':''}.`;
        return `${y}${M}${d}${h}${m}${s}`.trim();
    }
}