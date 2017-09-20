import { Component, OnInit} from '@angular/core';
import { MarvelService } from './marvel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MARVEL CHARACTERS';


characterData;
charInput;

constructor(private marvelService: MarvelService){}

getCharactersFromService(){
  this.marvelService.getCharacterData()
    .subscribe(
      characterData => {
        this.characterData = characterData.data.results
        console.log(this.characterData)
      }
    )
}

ngOnInit(){
  this.getCharactersFromService()
}

catchInput(thing: string){
  this.charInput = thing
  this.marvelService.getSearch(this.charInput)
  .subscribe(
    characterData => {
      this.characterData = characterData.data.results
      console.log(this.characterData)
    }
  )
}


}

