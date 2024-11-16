import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from './NgZorroAntdModules';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgZorroAntdModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HotelWeb';
}
