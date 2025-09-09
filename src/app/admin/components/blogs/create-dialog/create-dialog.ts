import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-dialog',
  standalone: false,
  templateUrl: './create-dialog.html',
  styleUrl: './create-dialog.scss',
})
export class CreateDialog {
  createBlog(
    title: HTMLInputElement,
    content: HTMLTextAreaElement,
    isPublished: MatCheckbox
  ) {
    console.log(title.value + '\n');
    console.log(content.value);
    console.log(isPublished.checked);
  }
}
