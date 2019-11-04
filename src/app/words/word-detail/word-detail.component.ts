import { Component, OnInit, Input } from '@angular/core';
import {Word} from '../../word';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WordService} from '../../word.service';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.scss']
})
export class WordDetailComponent implements OnInit {
  constructor(
      private route: ActivatedRoute,
      private wordService: WordService,
      private location: Location
  ) { }
  @Input() word: Word;

  ngOnInit(): void {
    this.getWord();
  }

  getWord(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.wordService.getWord(id)
        .subscribe( word => this.word = word);
  }

}
