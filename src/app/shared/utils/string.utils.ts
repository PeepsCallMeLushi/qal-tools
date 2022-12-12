export class StringUtils {
    public static isNotNullNotEmptyNotUndefinedNotZero(value: string): boolean {
        return this.isNotEmpty(value) && this.isNotEmpty(value) && this.isNotZero(value);
    }

    public static isNotNull(value: string): boolean {
        return value !== null;
    }

    public static isNotEmpty(value: string): boolean {
        return this.isNotNull(value) && value !== '';
    }

    public static isNotZero(value: string): boolean {
        return this.isNotNull(value) && +value !== 0;
    }

    public static isNotUndefined(value: string): boolean{
        return this.isNotNull(value) && value !== undefined;
    }

}