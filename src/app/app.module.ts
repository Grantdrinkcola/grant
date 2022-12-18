import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import {PaginatorModule} from "primeng/paginator";
import {CalendarModule} from "primeng/calendar";
import { MessageService, ConfirmationService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {CheckboxModule} from "primeng/checkbox";
import {StyleClassModule} from "primeng/styleclass";
import {DialogService} from "primeng/dynamicdialog";
import { TotalComponent } from './total/total.component';
import { NavigateComponent } from './navigate/navigate.component';
import {CaptchaModule} from 'primeng/captcha';
import {OrderListModule} from 'primeng/orderlist';
import { MorComponent } from './mor/mor.component';
import { UpdatetvComponent } from './updatetv/updatetv.component';
import { EditreviewComponent } from './editreview/editreview.component';
import {MenubarModule} from 'primeng/menubar';
import { AddtvComponent } from './addtv/addtv.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisteruserComponent,
    TotalComponent,
    NavigateComponent,
    MorComponent,
    UpdatetvComponent,
    EditreviewComponent,
    AddtvComponent,
    UserdetailComponent,
    AddfriendsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    InputSwitchModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    FileUploadModule,
    InputTextareaModule,
    RippleModule,
    InputNumberModule,
    ToastModule,
    AvatarModule,
    CardModule,
    TableModule,
    ConfirmDialogModule,
    CheckboxModule,
    StyleClassModule,
    PaginatorModule,
    CalendarModule,
    CaptchaModule,
    OrderListModule,
    MenubarModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },MessageService, ConfirmationService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
