import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from './projects';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Projects],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Projects }]),
  ],
})
export class ProjectsModule {}
