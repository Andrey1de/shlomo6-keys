
export class CarKeyCell{
    
    constructor(readonly cellId:number){

    }

}


export class CarsKeySafe{
  readonly cells: CarKeyCell[] = [];  
 

  private constructor  (N:number = 200){
    for (let cellId = 1; cellId <= N; cellId++) {
        this.cells.push(new CarKeyCell(cellId))
        
    }
  }

  static create(N:number = 200): CarsKeySafe{
    const ret = new CarsKeySafe(N);

    return ret;

  }

}

export const Safe=CarsKeySafe.create(200);