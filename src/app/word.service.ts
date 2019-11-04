import { Injectable } from '@angular/core';
import { Word } from './word';
import { WORDS } from './words-list';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private messageService: MessageService) { }

  getWords(): Observable<Word[]> {
    this.messageService.add('WordService: fetched heroes');
    return of(WORDS);
  }

  getWord(id: number): Observable<Word> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`WordService: fetched hero id=${id}`);
    return of(WORDS.find(word => word.id === id));
  }
}
