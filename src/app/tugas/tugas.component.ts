import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  username= '';

  constructor(){ }

  onUpdateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername(){
    this.username = '';
  }

  ngOnInit() {
  }

}
