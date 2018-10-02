import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.css']
})
export class Tugas3Component implements OnInit {
  status = true;
  detailName = "";
  log=[];

  constructor() { }

  ngOnInit() {
  }

  onClickDetail(){
    this.log.push(this.log.length+1);
    if(this.status === true){
      this.detailName = "Watashi Ga Kita!!!";
      this.status = false;  
    }else{
      this.detailName = "";
      this.status = true;
    }
  }

}


