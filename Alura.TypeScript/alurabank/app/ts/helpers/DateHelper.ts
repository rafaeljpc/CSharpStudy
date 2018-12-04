export class DateHelper {

    constructor(){
        throw new Error("Cannot instantiate this class");
    }

    /**
     * Parse a Date
     * 
     * @param str "yyyy-mm-dd" string date format
     */
    public static parseDate(str: string) {
        let d = new Date(str.replace(/-/g, ','));
        d.setMonth(d.getMonth() + 1);
        return d;
    }

    public static toString(date: Date) {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }
}