import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ComponentsModule } from './components/components-module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Layout],
  imports: [CommonModule, RouterModule, ComponentsModule, MatSidenavModule],
  exports: [Layout],
})
export class LayoutModule {}
