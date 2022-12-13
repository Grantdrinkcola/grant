import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import { AddfriendsComponent } from '../addfriends/addfriends.component';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user:any

  friendsname:any={
    friendsname:this.activatedRoute.snapshot.queryParams['name'],
    name:''
  }
  name:any={
    name:this.activatedRoute.snapshot.queryParams['name']
  }
  friends:any
  constructor(private televesions:televesionservice, private message: MessageService,private router: Router,private activatedRoute : ActivatedRoute,public dialogService: DialogService) { }

  ngOnInit(): void {
    this.userdetail()
    console.log(this.activatedRoute.snapshot.queryParams['name'])
    this.showallfriends()
  }
  userdetail(){
    this.televesions.userdetailinf(this.activatedRoute.snapshot.queryParams['name']).subscribe({
      next:(res)=>{
        console.log(res)
        this.user=res.data
      }
    })
  }
  delete(){
    this.televesions.deleteuser(this.activatedRoute.snapshot.queryParams['name']).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigate(['/login']);

      }
    })
  }
  add(){
    const open = this.dialogService.open(AddfriendsComponent, {
      data: {
        name:this.activatedRoute.snapshot.queryParams['name']
      }
    });

  }
  showallfriends(){
    this.televesions.showallfriends(this.name).subscribe(res=>{
      console.log(res)
     this.friends =  res
  })
}
deletefriends(id:any){
  this.televesions.deletefriends(id).subscribe(res=>{
    window.location.reload()

})
}
}
