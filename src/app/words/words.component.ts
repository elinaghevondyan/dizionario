import { Component, OnInit } from '@angular/core';
import {WORDS} from '../words-list';
import {Word} from '../word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  constructor() { }

  words = WORDS;
  searchText;

  selectedWord: Word;

  ngOnInit() {
  }
  onSelect(word: Word): void {
    this.selectedWord = word;
  }

}
