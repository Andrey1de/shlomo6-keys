import { CarKey } from "./car-key";


export class CarKeyCell{

  carKey?:CarKey;
    
  constructor(readonly cellId:number){

  }

}
const SAFE_NUM = 10;

export class CarsKeySafe{
  readonly cells: CarKeyCell[] = [];  
 

  private constructor  (N:number = SAFE_NUM ){
    for (let cellId = 1; cellId <= N; cellId++) {
        this.cells.push(new CarKeyCell(cellId));
        
    }
  }

  getCell(n:number) : CarKeyCell | undefined {
    return (--n >0 && n < this.cells.length ) ? this.cells[n] : undefined;
  }

  static create(N:number = SAFE_NUM , n2test:number = 20): CarsKeySafe{
    const ret = new CarsKeySafe(N);
    if(n2test > 0){
      testFillSafe(n2test)
    }

    return ret;

  }

}

export const Safe:CarsKeySafe=CarsKeySafe.create(200);
const oneMin =  1000 * 3600 ;
const min10 =  oneMin * 10 ;

export function testFillSafe(numDelivered:number = 20){
  const N = Safe.cells.length;
   let date0 = (new Date()).getTime() - 3 * min10 - (min10 * numDelivered);
  
  for (let i = 0; i < numDelivered; i++) {
    const  key = Safe.cells[i +  1].carKey;
    if(key){
      key.carId = (1110001 + i).toString();
      key.inGrarId = (9990001 + i % 7).toString();
      key.inDate = new Date(date0);
      date0 += min10;

    }

    
  }

}
