import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-addtv',
  templateUrl: './addtv.component.html',
  styleUrls: ['./addtv.component.css']
})
export class AddtvComponent implements OnInit {

  constructor(private televesions:televesionservice, private message: MessageService,private router: Router,public config: DynamicDialogConfig) { }
  addform:any={
   username:'',
   name:'',
   detail:''

  }
  uploadedFiles: any[] = [];
  infomraitonnamefile:any
  fileinformation:any;

  ngOnInit(): void {
  }

  add(){
    var submitData = new FormData();
    submitData.append('file', this.fileinformation)
    submitData.append('name',this.addform.name)
    submitData.append('username',this.addform.username)
    submitData.append('detail',this.addform.detail)
    this.televesions.add(submitData).subscribe({
      next:(res)=>{
        console.log(res)
        this.message.add({severity: 'success', summary: 'success',detail:"add success" });
        window.location.reload()

      }
    })
  }
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        console.log(file)
        this.fileinformation.push(file);
    }
    this.message.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  myUploader(event:any) {
    console.log(event.files[0])
    this.fileinformation = event.files[0]
  
   this.infomraitonnamefile =event.files[0].name.slice(-4,event.files[0].name.length)

}
}
