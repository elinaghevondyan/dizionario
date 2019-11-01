import { Component, OnInit } from '@angular/core';
import {Word} from '../word';
import {WORDS} from '../words-list';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  constructor() { }
  searchText;
  selectedWord: Word;
  words = WORDS;

  ngOnInit() {
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

}
