import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutComponent } from 'ng-zorro-antd/layout';
import { PostRoomComponent } from './components/post-room/post-room.component';
import { NgZorroAntdModule } from '../../NgZorroAntdModules';


@NgModule({
    imports: [
      PostRoomComponent,
      CommonModule,
      AdminRoutingModule,
      NzLayoutComponent,
      NgZorroAntdModule,
      ReactiveFormsModule,
      AdminRoutingModule,
      NzFormModule
    ]
})
export class AdminModule {}
