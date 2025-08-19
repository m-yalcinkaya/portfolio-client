import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../../../app-routing-module';
import { RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [Footer, Header, Sidebar],
  imports: [CommonModule, MatListModule, RouterModule, AppRoutingModule],
  exports: [Footer, Sidebar, Header],
})
export class ComponentsModule {}
