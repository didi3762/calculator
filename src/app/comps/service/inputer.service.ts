import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputerService {
  

  constructor() {  }


  inputsSimanin:string[] = []
  inputsArr:string[] = []
  inputsArr3:string[] = []
  arrofARRS:string[][] = []

  
  
  pushNewInput(ipt:string,arr:string[]){
    arr.push(ipt)
    this.arrofARRS.push(this.inputsArr)
  }
  dual:string[][] = [
    ['we','are','the','chanmpons'],
    ['welcome','are','the','avratechs'],
    ['shukli','are','the','boo'],
  ]
}
