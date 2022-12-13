import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any = {
    password: '',
    email: '',

  }
  constructor(private televesions:televesionservice, private message: MessageService,private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.televesions.login(this.loginform).subscribe({
      next:(res)=>{
        console.log(res)
        if(this.loginform.password == res[0].password){
        this.message.add({severity: 'success', summary: 'login',detail:"login success" });
        this.router.navigate(['/total'],{ queryParams: { id:this.loginform.email }});
        }else{
          alert('errora')
        }
      }
    })
}
showResponse(event:any) {
  this.message.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}
}
