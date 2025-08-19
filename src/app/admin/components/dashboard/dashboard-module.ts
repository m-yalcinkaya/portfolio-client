import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard';

@NgModule({
  declarations: [Dashboard],
  imports: [CommonModule],
  exports: [Dashboard],
})
export class DashboardModule {}
