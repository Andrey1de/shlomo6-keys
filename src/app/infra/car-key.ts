export class CarKey{
    private static _GKeyId = 0;
    static setGKeyId(value:number){this._GKeyId = value;}

    constructor(carKey:number = 0){
       
        this.keyId = (carKey === 0)? ++CarKey._GKeyId : carKey;
        
    }

    readonly keyId!:number;

    carId:string='';
    inGrarId: string='';
    inDate?:Date;
    outGrarId: string='';
    outDate?:Date;
    
//    inCar(carId:string,inGrarId:string){

//    }

}


