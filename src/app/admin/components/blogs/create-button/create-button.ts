import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateDialog } from '../create-dialog/create-dialog';

@Component({
  selector: 'app-create-button',
  standalone: false,
  templateUrl: './create-button.html',
  styleUrl: './create-button.scss',
})
export class CreateButton {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CreateDialog);
  }
}
