import { NgComponentOutlet } from '@angular/common';
import { EmitterVisitorContext } from '@angular/compiler';
import { AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener, input, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
var g_first_car = 66000000;

@Directive({
  selector: '[and-input-car]',
  standalone: true

})
export class InputCarDirective implements OnInit, AfterViewInit {
 
  private native!:HTMLInputElement;
  //private oldCarNum:string = '';

  constructor(private el: ElementRef<HTMLInputElement> , 
      private r2: Renderer2,
      private ngControl: NgControl) {
     this.native = this.el.nativeElement;
  }
  ngOnInit(): void {
    this.native.classList.add('c-input-car');
 }

  ngAfterViewInit(): void {
   // this._oldCarNum = this._carNum;
    //throw new Error('Method not implemented.');
  }

  //ngControl!: inject(NgControl)
  
  //#region Inputs,Outputs
  
  private _carNum:string='';
  @Input()
  public set carNum(value: string) {
    let newVal = value;
    if( this._carNum != value ){
      newVal = this.toCarNum(value);
      if(this._carNum  != newVal){
        this._carNum  = newVal;
       // this.native.value = this._carNum;
        this.setProperty( 'value',this._carNum  );
       
   
      }
           
    }
     
  }
  @Output() carNumChange =  new EventEmitter<string>();

  private setProperty( name: string, value: any){

    this.r2.setProperty(this.native, name,value);
  }

  private addClass( name: string){

    this.r2.addClass(this.native, name);
  }
  private removeClass( name: string){

    this.r2.removeClass(this.native, name);
  }
  private getAttribute( name: string){

    this.na(this.native, name);
  }
  private setAttribute( name: string,value:any){

    this.r2.setAttribute(this.native, name,value);
  }
  private removeAttribute( name: string){

    this.r2.removeAttribute(this.native, name);
  }



  clear(){
    debugger;
    this.carNum='';
  }
  @HostListener('input') onChange() {
    this.carNum =  this.native.value;
  }

  private _oldCarNum  :string = '';
  get oldCarNum():string {
    return this._oldCarNum;//this.native.getAttribute("ng-reflect-car-num")??'';
  }
  get IsReady() { return this._carNum.length === 9 
                  || this._carNum.length === 10;} 
  @HostListener('focus') onFocus() {
   // this.native.readOnly

    //this.oldCarNum =  this._carNum;
   // this._selected =  true;
   this.native.setAttribute("data-select","true");// ='yellow;'
   // this.el.nativeElement.style.backgroundColor = "cyan";
  }
  @HostListener('blur') onBlur() {
    //this._selected =  false;
    this.native.setAttribute("data-select","false");// ='yellow;'
    if(this.oldCarNum != this._carNum ){
      const isReady = this.IsReady;
      //this.oldCarNum = this._carNum;
     // this.oldCarNum = this._carNum ;
      this.carNumChange.emit(this._carNum);
     
      if(this.IsReady !== !!this.native.getAttribute('data-ready'))
      this.setAttribute('data-ready',true);
     
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
        break;
      case 'Backspace':
      
          console.log(`++code:${ev.code} | key:${ev.key}`);
          break;
      
      }
      ev.preventDefault();
      ev.stopPropagation();
      console.log(`--code:${ev.code} | key:${ev.key}`);
      return 0;
    
  }
  onPlus(){
    //TBD
  }
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
  private toCarNum(num:string):string{
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
    else if(arr.length == 7){
       ret = arr[0] + arr[1] + arr[2] + '-'
      + arr[3] + arr[4] + '-' 
      + arr[5] + arr[6] + + arr[7];
    
  
    }
    return ret;
  }
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

function hex(s:string  ):string{
  s = ''+s;
  if(s.length >= 1){
    const n = s?.charCodeAt(0)
    return (+n).toString(16);

  }
  return '';
}