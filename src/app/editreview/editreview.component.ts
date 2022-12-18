import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import { UpdatetvComponent } from '../updatetv/updatetv.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {
data:any

reviewform:any={
  name:this.activatedRoute.snapshot.queryParams['name'],
  detail:''
}
  constructor(private televesions:televesionservice, private message: MessageService, private activatedRoute : ActivatedRoute,public dialogService: DialogService,public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    console.log(this.config.data.id)
  }
  editreview(){
  
    this.reviewform.detail = this.data
    this.televesions.editereview(this.config.data.id,this.reviewform).subscribe(res=>{
      this.message.add({severity: 'success', summary: 'success',detail:"edit success" });
      window.location.reload()
    })
  }
}
