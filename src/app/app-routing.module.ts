import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordsComponent } from './words/words.component';
import {WordDetailComponent} from './words/word-detail/word-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'words', component: WordsComponent },
  { path: 'detail/:id', component: WordDetailComponent},
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
