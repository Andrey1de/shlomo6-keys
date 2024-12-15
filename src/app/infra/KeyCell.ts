//import { retry } from "rxjs";
import { Car6, ICar6 } from "./Car6";
import formatStringByPattern from   'format-string-by-pattern';

export class KeyCell{
    private _iCar: Car6 | undefined;
   
    public get empty(): boolean {
        return !this._iCar ||  (this._iCar.carId <= 999999);
    }
  
    // public get iCar(): Car6 | undefined {
    //     return this._iCar;
    // }
    private _carIdStr: string = "";
    public get carIdStr(): string {
        return this._carIdStr;
    }
    public set carIdStr(value: string) {
        this._carIdStr = value;
    }

    public set iCar(value: Car6 | undefined) {
        this._iCar = value;
        if(this._iCar){
            this._iCar.cellId = this.cellId;

        }
   
    } 
    public get iCar() : Car6 | undefined {
        return this._iCar;
    
   
    }
    constructor(readonly cellId:number, car6:Car6 | undefined = undefined){
        this.iCar = car6;
    }
 
    static numToCarStrNum(strCarNum:number | undefined){
        if(!strCarNum || strCarNum == 0)  return '';
        let str = strCarNum.toString();//.replace(/[^\d]/g, '');
        let ret = str;
        if(str.length  == 7){
            ret = formatStringByPattern('99-999-99', str);
                    
        } else if(str.length  == 8){
            ret = formatStringByPattern('999-99-999', str);
                    
        }
    
        return ret;
    }
    static strToCarStrNum(strCarNum:string = ''){
        if(!strCarNum)  return '';
        let str = strCarNum.replace(/[^\d]/g, '');
        let ret = str;
        if(str.length  == 7){
            ret = formatStringByPattern('99-999-99', str);
                    
        } else if(str.length  == 8){
            ret = formatStringByPattern('999-99-999', str);
                    
        }
    
        return ret;
    }
    // static initSafes(num:number = 5) : KeyCell[]{
    //     let arr:KeyCell[] = [];
    //     for(let i = 1; i <= num;num++){
    //         let cell = new KeyCell(num);
    //         arr.push(cell));
    //         setCellCar(cell);
    //     }
    //     return arr;

    // }
}


//     new KeyCell(1, {
//         idd: 1,
//         cellId: 1,
//         carId: 1111111,
//         inDate: new Date("2024-12-1 1:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
//     new KeyCell(2, {
//         idd: 2,
//         cellId: 2,
//         carId: 22222222,
//         inDate: new Date("2024-12-2 2:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
    
//     new KeyCell(3, {
//         idd: 3,
//         cellId: 3,
//         carId: 33333333,
//         inDate: new Date("2024-12-3 3:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
    
//     new KeyCell(4, {
//         idd: 4,
//         cellId: 4,
//         carId: 44444444,
//         inDate: new Date("2024-12-4 4:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
//     new KeyCell(5, {
//         idd: 5,
//         cellId: 5,
//         carId: 55555555,
//         inDate: new Date("2024-12-5 5:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
//     new KeyCell(6, {
//         idd: 6,
//         cellId: 6,
//         carId: 66666666,
//         inDate: new Date("2024-12-6 6:00"),
//         inGrar: 0,
//         outDate: undefined,
//         outGrar: 0,
//         carType: "",
//     }),
 

// ]

