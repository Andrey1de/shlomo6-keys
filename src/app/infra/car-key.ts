export interface ICarKey{
    
    keyId:number;
    safeCellId:number;
    carId: string;
    inGrarId: string;
    inDate?:Date;
    outGrarId: string;
    outDate?:Date;
    responsible: string ;
    type: string;

}

export class CarKey implements ICarKey{
    private static _GKeyId = 1000;
    //tbd setGKeyId after reading archieve as max + 1
    static setGKeyId(value:number){this._GKeyId = value;}

    constructor(public safeCellId: number = 0){
       
        this.keyId =  ++CarKey._GKeyId ;
        
    }
  
    keyId!: number ;

    //#region carId
        private _carId: string = '';
        public get carId(): string {
            return this.toCarNum(this._carId);
        }
        public get carIdValid(): boolean {
            const len = this._carId.length;
            return len == 7 || len == 8;
        }
        public set carId(value: string) {
            this._carId = value.replace(/\D/g,'');
        }
    //#endregion

    //#region inGrarId
        private _inGrarId: string = '';
        public get inGrarId(): string {
            return this.toCarNum(this._inGrarId);
        }
        public get inGrarIdValid(): boolean {
            const len = this._inGrarId.length;
            return len == 7 || len == 8;
        }
        public set inGrarId(value: string) {
            this._inGrarId = value.replace(/\D/g,'');
        }
    //#endregion

    inDate?: Date | undefined;

    //#region outGrarId
        private _outGrarId: string = '';
        public get outGrarId(): string {
            return this.toCarNum(this._outGrarId);
        }
        public get outGrarIdValid(): boolean {
            const len = this._outGrarId.length
            return len == 7 || len == 8;
        }
        public set outGrarId(value: string) {
            this._outGrarId = value.replace(/\D/g,'');
        }
    //#endregion

    outDate?: Date | undefined;
    responsible: string = '';
    type: string = '';

    private toCarNum(num:string):string{
   
        let ret = num.replace(/\D/g,'') ?? '';
        if(ret.length <= 6){
          return ret;
        } 
        const arr = [...ret];
      
        if(arr.length == 7){
         
           ret = arr[0] + arr[1] + '-' 
                    + arr[2] + arr[3] +arr[4] 
                    + '-' + arr[5] + arr[6];
          
        }
        else {
           ret = arr[0] + arr[1] + arr[2] + '-'
          + arr[3] + arr[4] + '-' 
          + arr[5] + arr[6] + + arr[7];
        
      
        }
        return ret;
    }

}


