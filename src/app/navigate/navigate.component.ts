import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import { AddtvComponent } from '../addtv/addtv.component';
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  items: any
  constructor(private televesions:televesionservice, private message: MessageService,private router: Router,private activatedRoute : ActivatedRoute,public dialogService: DialogService) { }
  name: any
  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.queryParams['id']
    console.log(this.activatedRoute.snapshot.queryParams['id'])
  }
  add(){
    const open =  this.dialogService.open(AddtvComponent, {
      header: "add",
      width: '30%',
    });
  }
  detail(){
    this.router.navigate(['/detail'],{ queryParams: { name:this.activatedRoute.snapshot.queryParams['id']}});
  }
}
