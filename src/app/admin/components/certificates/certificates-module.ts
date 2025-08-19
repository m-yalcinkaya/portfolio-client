import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certificates } from './certificates';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Certificates],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Certificates }]),
  ],
})
export class CertificatesModule {}
