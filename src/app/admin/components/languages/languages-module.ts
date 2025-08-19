import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Languages } from './languages';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Languages],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Languages }]),
  ],
})
export class LanguagesModule {}
