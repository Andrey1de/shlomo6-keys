export enum ECar {
   void = 0,
   Arrived = 1,
   KeyTaken = 2,
   NoKey = 3,
   KeyBorrowed = 4,//Temporary given to move auto
   TakenAway = 10,
   TakenTL = 11,//Daniel & Co


}

export interface ICar6{
   idd:number;
   carId:number;
   eCar: ECar;
   cellId?:number;
   inDate?:Date;
   inGrar?:number;
   outDate?:Date;
   outGrar?:number;
   carType:string ;
}




export class Car6 implements ICar6{
   idd: number = 0;
   carId: number = 0;
   eCar: ECar = ECar.void;
   cellId:number = 0;
   
   inDate: Date | undefined;
   inGrar: number | undefined;
   outDate: Date | undefined;
   outGrar: number | undefined;
   carType: string = '';
   constructor(carId:number,  inGrar:number, 
      idd: number ){
      this.carId = carId;
      this.inGrar  =  inGrar;
      this.idd = idd;
   }

   setICar6(i:Partial<ICar6>){
      if(i){
         this.carId = i.carId ?? 0;
         this.carId = i.carId ?? 0;
         this.inDate = i.inDate;
         this.inGrar= i.inGrar;
         this.outDate= i.outDate;
         this.outGrar= i.outGrar;
         this.carType= i.carType ?? "";
   
      }
  
   }

}