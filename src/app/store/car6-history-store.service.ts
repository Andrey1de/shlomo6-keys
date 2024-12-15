import { Injectable } from '@angular/core';
import { Car6, ECar } from '../infra/Car6';
import { ECDH } from 'crypto';

@Injectable({
  providedIn: 'root'
})
var gIDD = 1000000;
export class CarHistoryStoreService {
  readonly carsMap : Map<number,Car6> = new Map<number,Car6>();

  constructor() { }


  carArrived(carId:number,inGrar:number,
      inDate: Date | undefined = undefined): Car6{
    let car6 = new Car6(carId,inGrar,++gIDD);
    car6.inDate = inDate ?? new Date();
    car6.eCar = ECar.Arrived;
    
    this.carsMap.set(carId,car6);
  
    return car6;
    
  }

  carTakenAway(carId:number,outGrar:number , 
      outDate : Date | undefined = undefined)
    : Car6 | undefined{
    let car6 = this.carsMap.get(carId);
    if(!!car6){
      car6.outGrar = outGrar;
      car6.outDate = outDate ?? new Date();
      car6.eCar = (outGrar > 1000000)?
         ECar.TakenAway: ECar.TakenTL
    }
    return car6;
    
  }
  carRemove(carId:number): boolean{
    return this.carsMap.delete(carId);
  }

  getHistory() : Car6[]
  {
    return [... this.carsMap.values()];

  }

  // getOrCreateCar6(carId:number,  date:Date | undefined = new Date()) 
  //   : Car6
  // {
  //   let car6 = this.carsMap.get(carId);
  //   if(!car6){
  //     car6 = new Car6(carId,++gIDD);
  
  //   }
  //   car6.inDate = (!date) ? car6.inDate : date
  //   return car6; 

  // }
  
}

