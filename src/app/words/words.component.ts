import { Component, OnInit } from '@angular/core';
import {Word} from '../word';
import {WORDS} from '../words-list';
import { WordService } from '../word.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  words: Word[];

  constructor(private wordService: WordService) { }
  searchText;
  selectedWord: Word;

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    this.wordService.getWords()
        .subscribe(words => this.words = words);
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

}
