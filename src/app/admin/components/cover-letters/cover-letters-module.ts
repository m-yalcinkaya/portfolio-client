import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverLetters } from './cover-letters';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CoverLetters],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CoverLetters }]),
  ],
})
export class CoverLettersModule {}
