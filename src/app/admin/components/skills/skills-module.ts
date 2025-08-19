import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skills } from './skills';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Skills],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Skills }]),
  ],
})
export class SkillsModule {}
