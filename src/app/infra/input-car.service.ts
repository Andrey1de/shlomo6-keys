import { EmitterVisitorContext } from '@angular/compiler';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, input, Input, OnInit, Output, Renderer2 } from '@angular/core';

var g_first_car = 66000000;

@Directive({
  selector: '[and-input-car]',
  standalone: true

})
export class InputCarDirective implements OnInit, AfterViewInit {
 
  
  
  renderer2: any;
  @Input()
  public set carNum(value: string) {
     
    if( this._carNum != value){
      const newVal = toCarNum(value)
     
      this._carNum  = newVal;
      this.native.value = this._carNum;
     // this.renderer2.setProperty(this.native, 'value',this._carNum  , '');
      //this.carNumChange.emit(this._carNum );
        
    }
     
  }

  private _carNum: string = '';
  public get carNum(): string {
    return this._carNum;
  }
  
  @Output() carNumChange =  new EventEmitter<string>();


  
  //@Input('input-car') row !:any;

  private native!:HTMLInputElement;
  //private oldCarNum:string = '';

  constructor(private el: ElementRef<HTMLInputElement> , 
      private r2: Renderer2) {
     this.native = this.el.nativeElement;
  }
  ngOnInit(): void {
    this.native.classList.add('c-input-car');
 }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  clear(){
    debugger;
    this.carNum='';
  }
  @HostListener('input') onChange() {
    this.carNum =  this.native.value;
  }
 
 
  get oldCarNum():string {
    return this.native.getAttribute("ng-reflect-car-num")??'';
  }
  @HostListener('focus') onFocus() {

    //this.oldCarNum =  this._carNum;
   // this._selected =  true;
   this.native.setAttribute("data-select","true");// ='yellow;'
   // this.el.nativeElement.style.backgroundColor = "cyan";
  }
  @HostListener('blur') onBlur() {
    //this._selected =  false;
    this.native.setAttribute("data-select","false");// ='yellow;'
    if(this.oldCarNum != this._carNum ){
      //this.oldCarNum = this._carNum;
      this.carNumChange.emit(this._carNum);
    }
    //this.el.nativeElement.style.color = "red";
    // element.style.backgroundColor = "red"
    //this.selected =  false;
    //this.el.nativeElement.style.backgroundColor = "lightgray";
  }
  
  @HostListener('keydown',[ '$event' ] ) onKeyDown(ev: KeyboardEvent){
    if(ev.key.length == 1 && ev.key >= '0' && ev.key <= '9'){
      console.log(`Num: code:${ev.code} | key:${ev.key}`);
      let numStr = this._carNum.replace(/\D/g,'');// ev.key;
      numStr+=ev.key;
      if(numStr.length > 8 ){
        numStr = numStr.substring(1,8);
      }
      this.carNum = numStr;
      //return;
    }
    else switch (ev.key){
      case '+':
        this.onPlus();
        return;
      case '-':
        this.onMinus();
        return;
      case '.':
        this.onDot();
        return;
      case 'r':
      case 'R':
        this.onR();
      return;
      case ' ':
        this.onSpace();
        return;
      
      case 'ArrowLeft':
      case 'ArrowRight':
        console.log(`++code:${ev.code} | key:${ev.key}`);
          return;
      case 'Backspace':
      
          console.log(`++code:${ev.code} | key:${ev.key}`);
          return;
      
      }
      ev.preventDefault();
      ev.stopPropagation();
      console.log(`--code:${ev.code} | key:${ev.key}`);
      return 0;
    
  }
  onPlus(){}
  onMinus(){
    this.clear();
  }
  onDot(){}
  onR(){
    this.carNum = SerialCarNum();//RandomCarNum();
  }
  
  onSpace(){
    //debugger;
    this.carNum = this.oldCarNum;
  }
  //#endregion
}//EOC=================




function RandomCarNum(): string{
  let num = 1000000 + Math.random() * 8999999;
  if( Math.random() >= 0.5){
    let dig0 = num % 10;
    num = (num - dig0) * 10 + dig0; //1234567=>12345607
  }
  return num.toFixed(0);

}
function SerialCarNum(): string{
  let num = ++g_first_car;
  
  return num.toFixed(0);

}

export function toCarNum(num:string):string{
  let ret = num.replace(/\D/g,'');;
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
function hex(s:string  ):string{
  s = ''+s;
  if(s.length >= 1){
    const n = s?.charCodeAt(0)
    return (+n).toString(16);

  }
  return '';
}