import { Component, OnInit } from '@angular/core';
import {WORDS} from '../words-list';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  words = WORDS;
  searchText;

  constructor() { }

  ngOnInit() {
  }

}
