import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {ActivatedRoute} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import { UpdatetvComponent } from '../updatetv/updatetv.component';
import { EditreviewComponent } from '../editreview/editreview.component';

@Component({
  selector: 'app-mor',
  templateUrl: './mor.component.html',
  styleUrls: ['./mor.component.css']
})
export class MorComponent implements OnInit {

  constructor(private televesions:televesionservice, private message: MessageService, private activatedRoute : ActivatedRoute,public dialogService: DialogService) { }
  detaillist:any
  detailinf:any
  detailform:any={
    detail: '',
    name:'',
    id:''
  }
  id:any={
    id:this.activatedRoute.snapshot.queryParams['id']
  }
  filename={
    filename:this.activatedRoute.snapshot.queryParams['id']
  }
  review:any
  reviews:any
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams['id'])
    this.detail()
    this.reviewlist()
  }
  
  detail(){
    this.televesions.detail(this.id).subscribe({
      next:(res)=>{
        console.log(res)
       this.detaillist = res[0]
      }
    })
  }
  update(){
    const open = this.dialogService.open(UpdatetvComponent, {
      data: {
        id:this.activatedRoute.snapshot.queryParams['id']
      }
    });
  }
  delete(){
    this.televesions.delete(this.activatedRoute.snapshot.queryParams['id']).subscribe(res=>{
      this.message.add({severity: 'success', summary: 'success',detail:"delete success" });
      
    })
  }
  addreview(){
    this.detailform.detail = this.detailinf
    this.detailform.filename=this.activatedRoute.snapshot.queryParams['id']
    this.detailform.name=this.activatedRoute.snapshot.queryParams['name']
    this.televesions.addreview(this.detailform).subscribe(res=>{
      this.message.add({severity: 'success', summary: 'success',detail:"add success" });
      window.location.reload()
    })
  }
  reviewlist(){
    this.detailform.filename=this.activatedRoute.snapshot.queryParams['id']
    this.televesions.reviewlist(this.filename).subscribe(res=>{
     console.log(res[0])
    this.reviews = res
    })
  }
  deletereview(id:any){
    this.id.id=id
    this.televesions.deletereview(id).subscribe(res=>{
      this.message.add({severity: 'success', summary: 'success',detail:"delete success" });
      window.location.reload()
    })
  }
  updatereview(id:any){
    const open =  this.dialogService.open(EditreviewComponent, {
      header: "Edit review",
      width: '30%',
      data:{
        id:id,
        name:this.activatedRoute.snapshot.queryParams['name']
      }
    });
  }
}
