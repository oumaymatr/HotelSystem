import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';  // Import routing module

@NgModule({
  imports: [CommonModule, CustomerRoutingModule], 
})
export class CustomerModule { }
