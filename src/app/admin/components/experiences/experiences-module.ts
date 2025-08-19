import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experiences } from './experiences';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Experiences],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Experiences }]),
  ],
})
export class ExperiencesModule {}
