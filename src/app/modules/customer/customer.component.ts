import { Component } from '@angular/core';
import { CustomerRoutingModule } from './customer-routing.module';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CustomerRoutingModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

}
