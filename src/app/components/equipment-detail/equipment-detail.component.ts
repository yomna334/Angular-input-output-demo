import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.css']
})
export class EquipmentDetailComponent implements OnInit {
@Input() item='mobile';
@Output() newItemValue=new EventEmitter<string>()
  constructor() { }
  
  ngOnInit(): void {
  
  }
addNewItem(value:string){
  this.newItemValue.emit(value)

}
}
