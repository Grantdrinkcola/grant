import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  registerform: any = {
    password: '',
    email: '',

  }
  constructor(private televesions:televesionservice, private message: MessageService) { }

  ngOnInit(): void {
  }
register(){
this.televesions.register(this.registerform).subscribe({
  next:(res)=>{
    console.log(res)
    this.message.add({severity: 'success', summary: 'success',detail:"register success" });

  }
})
}
}
