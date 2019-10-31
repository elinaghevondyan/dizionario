import { Component, OnInit } from '@angular/core';
import {WORDS} from '../words-list';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words = WORDS;

  constructor() { }

  ngOnInit() {
  }

}
