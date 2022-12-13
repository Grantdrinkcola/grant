import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import { UpdatetvComponent } from '../updatetv/updatetv.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-addfriends',
  templateUrl: './addfriends.component.html',
  styleUrls: ['./addfriends.component.css']
})
export class AddfriendsComponent implements OnInit {
  friendsnameb:any={
    name:this.config.data.name,
    friendsname:''
  }
  text:any
  constructor(private televesions:televesionservice, private message: MessageService, private activatedRoute : ActivatedRoute,public dialogService: DialogService,public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    console.log(this.config.data.name)

  }

  addfriends(){
  this.friendsnameb.friendsname = this.text
  this.televesions.addfriends(this.friendsnameb).subscribe(res=>{
    this.message.add({severity: 'success', summary: 'success',detail:"add success" });
  })
}
}
