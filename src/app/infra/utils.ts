export function randomCarId() : number{
    let carID = Math.ceil(Math.random() * 9000000) + 1000000;
    if(Math.random() >= 0.5){
        let n0 = carID % 10;
        carID = (carID - n0) * 10 + n0;
    }
    return carID;
}