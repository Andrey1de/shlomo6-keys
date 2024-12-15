import { Injectable } from '@angular/core';
import { KeyCell } from '../infra/KeyCell';
import { Car6 } from '../infra/Car6';
import { randomCarId } from '../infra/utils';
import { CarHistoryStoreService } from './car6-history-store.service';

const NCELLS = 200;
@Injectable({
  providedIn: 'root'
})
export class SafeKeyService {
  readonly keySafe:KeyCell[] = [];
  

  constructor(readonly histSvc: CarHistoryStoreService) {

    for (let cellId = 1; cellId <= NCELLS; cellId++) {
      this.keySafe.push(new KeyCell(cellId,undefined))
    }
  }

  testCreateSafe(){ 
    this.histSvc.carArrived  
   
    let d0 = new Date().getTime();
    d0 = d0 - d0 % 60000;//null s;
    let delT= 1000 * 60 * 10;//10
    
    d0 -= delT * NCELLS; 

    for (let cellId = 1; cellId <= 200; cellId++) {
      let carID = randomCarId();
      let inGrar = randomCarId();

        let car6 = this.histSvc.carArrived (carID,inGrar,new Date(d0));
        
       
        let cell = new  KeyCell(cellId,car6);
        console.log(`cellId:{cellId} , carID:{carID}`);
        this.keySafe[cellId - 1] = cell;
        d0 += delT;//10 min
        
    }


  }
}
