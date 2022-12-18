import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditreviewComponent } from './editreview/editreview.component';
import { LoginComponent } from './login/login.component';
import { MorComponent } from './mor/mor.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { TotalComponent } from './total/total.component';
import { UpdatetvComponent } from './updatetv/updatetv.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: "full"
  },
  {
    path: 'login', component: LoginComponent
  },
 
  {
    path: 'registeruser', component: RegisteruserComponent
  },
  {
    path: 'total', component: TotalComponent
  },
  {
    path: 'more', component: MorComponent
  },
  {
    path: 'update', component: UpdatetvComponent
  },
  {
    path: 'editreview', component: EditreviewComponent
  },
  {
    path: 'detail', component: UserdetailComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
