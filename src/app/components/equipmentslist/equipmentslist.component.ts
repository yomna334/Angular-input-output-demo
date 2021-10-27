import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipmentslist',
  templateUrl: './equipmentslist.component.html',
  styleUrls: ['./equipmentslist.component.css']
})
export class EquipmentslistComponent implements OnInit {

  constructor() { }
currnetItem:string="mobile with cam";
items=['jupe','dress']
  ngOnInit(): void {
  }
addclothespiece(newPiece:string){
this.items.push(newPiece)
console.log(this.items)
}
}
