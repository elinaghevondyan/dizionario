import { Component, OnInit, Input } from '@angular/core';
import {Word} from '../../word';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent implements OnInit {
  constructor() { }
  @Input() word: Word;

  ngOnInit() {
  }

}
