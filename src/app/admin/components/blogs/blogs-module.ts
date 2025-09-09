import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blogs } from './blogs';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { List } from './list/list';
import { CreateButton } from './create-button/create-button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateDialog } from './create-dialog/create-dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [Blogs, List, CreateButton, CreateDialog],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Blogs }]),
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginator,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
})
export class BlogsModule {}
