import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blogs } from './blogs';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [Blogs],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Blogs }]),
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class BlogsModule {}
