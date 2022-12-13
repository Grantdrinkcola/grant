import { Component, OnInit } from '@angular/core';
import { televesionservice } from '../televesion.service';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-updatetv',
  templateUrl: './updatetv.component.html',
  styleUrls: ['./updatetv.component.css']
})
export class UpdatetvComponent implements OnInit {
  updateform:any={
    username:'',
    name:'',
    detail:''

  }
  uploadedFiles: any[] = [];
  infomraitonnamefile:any
  fileinformation:any;
  constructor(private televesions:televesionservice, private message: MessageService,private router: Router,public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }
  update(){
    var submitData = new FormData();
    submitData.append('file', this.fileinformation)
    submitData.append('name',this.updateform.name)
    submitData.append('username',this.updateform.username)
    submitData.append('detail',this.updateform.detail)
    this.televesions.update(this.config.data.id,submitData).subscribe({
      next:(res)=>{
        this.message.add({severity: 'success', summary: 'success',detail:"edit success" });
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

