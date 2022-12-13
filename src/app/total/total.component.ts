import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
 tvlist:any
 user:any
 email:any={
  email:this.activatedRoute.snapshot.queryParams['id']
 }
  constructor(private televesions:televesionservice, private message: MessageService,private router: Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.showalltv()
   this.userdetail()
  }
 showalltv(){
  this.televesions.showalltv().subscribe({
    next:(res)=>{
      console.log(res)
     this.tvlist = res.Documents
     console.log( this.tvlist)

    }
  })
}
detail(data:any){
  this.router.navigate(['/more'],{ queryParams: { id: data,name:this.user.email }});
}
userdetail(){
  this.televesions.userdetail(this.email).subscribe({
    next:(res)=>{
      console.log(res)
   this.user =res[0]
    }
  })
}
}
