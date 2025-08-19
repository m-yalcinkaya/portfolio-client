import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Schools } from './schools';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Schools],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Schools }]),
  ],
})
export class SchoolsModule {}
