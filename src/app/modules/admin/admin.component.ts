import { Component } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminRoutingModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
