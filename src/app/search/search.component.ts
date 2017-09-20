import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  charInput;

  @Output() searchButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  charSearch(){
    this.searchButton.emit(this.charInput)
    console.log(this.charInput)
    this.charInput = ''
  }
 

}
