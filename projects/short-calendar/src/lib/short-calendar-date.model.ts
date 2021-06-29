
export class ShortCalendarDate{
    day:string;
    date: string;
    month: string;
    year: string;
    fullDate: Date;

    constructor(day: string,date: string,month: string,year:string,fullDate: Date){
        this.day = day;
        this.date = date;
        this.month = month;
        this.year = year;
        this.fullDate = fullDate;
    }
}