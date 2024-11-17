import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
