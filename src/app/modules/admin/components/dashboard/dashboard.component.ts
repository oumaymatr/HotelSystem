import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../admin-services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  currentPage = 1;
  rooms = [];
  constructor(private adminService: AdminService,
    private message: NzMessageService,
  ){
    this.getRooms();
  }
  getRooms(){
    this.adminService.getRooms(this.currentPage -1).subscribe(res=>{
      console.log(res);
      this.rooms = res;
    })
  }
}
