import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InputerService } from '../service/inputer.service';

@Component({
  selector: 'app-li-inputer',
  templateUrl: './li-inputer.component.html',
  styleUrls: ['./li-inputer.component.css']
})



export class LiInputerComponent implements OnInit {

  constructor(private iptSvc: InputerService) { 
    this.iptSvc.arrofARRS.push(this.iptSvc.inputsArr)
    this.iptSvc.inputsArr=[]
  }

  ngOnInit(): void { }



  myNum: number = 0
  myCalculation: string = ' '
  result: string = ' '
  mySum: number = 0
  mySum2: number = 0
  


  @ViewChild('toAdd') AddButton: ElementRef

  @ViewChild('myThing') myInput: ElementRef

  onOperator(num: string) {
    if (this.myNum == 1) {
      this.myCalculation = ' '
      this.myNum = 0
    }
    this.myCalculation += num
    this.result = this.myCalculation
  }

  onkeypress(num: string) {
    let pattern = /^[\d\+\/\*\.\- \(\)/\^\%]*$/g
    if (this.myNum == 1) {
      this.myCalculation = ' '
      this.myNum = 0
    }
    if (!num.match(pattern) || this.myNum == 1) {
      this.myNum = 0
      return false
    }
  }


  onkeyup(num: string) {

    this.myCalculation = num
    this.result = this.myCalculation
  }



  clearHistory() {
    this.myCalculation = ' '
    this.iptSvc.arrofARRS.push(this.iptSvc.inputsArr)
    // this.iptSvc.inputsArr = []
  }

  pushHist(){
    if(this.iptSvc.arrofARRS[this.iptSvc.arrofARRS.length-1].length>0){
    this.iptSvc.arrofARRS.push(this.iptSvc.inputsArr)
    this.iptSvc.inputsArr=[]
    this.mySum2++
  }
  }





  inputerFN(newValue): void {
    
    this.mySum = eval(newValue);
    this.myCalculation += `=${this.mySum.toString()}`
    this.result = this.myCalculation

    this.myNum++
    

    this.iptSvc.arrofARRS[this.mySum2].push(this.myCalculation)
    
    console.log(this.iptSvc.inputsArr[this.mySum2]);
    




    console.log(newValue, this.myInput, this.iptSvc.arrofARRS);

  }



}
