import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor (){}

  ngOnInit(): void {
    
  }

@Input() all:number = 0;
@Input() iphone:number = 0;
@Input() ipad:number = 0;
@Input() mac:number = 0;
@Input() watch:number = 0;

selectedRadioButtonValue: string = "All"

@Output()
filterRadioButtonSelectionChange : EventEmitter<string> = new EventEmitter<string>();

onRadioButtonSelectionChange(){
  this.filterRadioButtonSelectionChange.emit(this.selectedRadioButtonValue);
}

}
