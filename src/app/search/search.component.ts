import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  charInput;

  @Output() searchButton = new EventEmitter<string>();
  @Output() searchBlank = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  charSearch(){
    if(!this.charInput){
      this.searchBlank.emit()
    }
    else{
      this.searchButton.emit(this.charInput)
      console.log(this.charInput)
      this.charInput = ''
    }
  }
 

}
