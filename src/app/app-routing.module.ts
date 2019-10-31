import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './words/words.component';


const routes: Routes = [
  { path: 'words', component: WordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
