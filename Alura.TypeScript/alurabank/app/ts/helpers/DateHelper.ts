export class DateHelper {

    constructor(){
        throw new Error("Cannot instantiate this class");
    }

    /**
     * Parse a Date
     * 
     * @param str "yyyy-mm-dd" string date format
     */
    public static parseDate(str: string) : Date {
        let d = new Date(str.replace(/-/g, ','));
        d.setMonth(d.getMonth() + 1);
        return d;
    }

    public static toString(date: Date) : string {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    public static IsUsefulDay(date: Date) : boolean {
        return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
    }
}

export enum DiaDaSemana {
    Domingo = 0,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}