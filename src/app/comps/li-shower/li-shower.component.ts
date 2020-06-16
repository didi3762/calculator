import { Component, OnInit } from '@angular/core';
import { InputerService } from '../service/inputer.service';


@Component({
  selector: 'app-li-shower',
  templateUrl: './li-shower.component.html',
  styleUrls: ['./li-shower.component.css']
})
export class LiShowerComponent implements OnInit {

  constructor(public iptSvc: InputerService) { }

  ngOnInit(): void {
  }

  clearHistory(arr: string[]) {
    const index = this.iptSvc.arrofARRS.indexOf(arr);
    if (index > -1) {
      this.iptSvc.arrofARRS.splice(index, 1);
    }
  }

}
