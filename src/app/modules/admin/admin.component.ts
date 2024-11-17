import { Component } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { NgZorroAntdModule } from '../../NgZorroAntdModules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminRoutingModule, NgZorroAntdModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
