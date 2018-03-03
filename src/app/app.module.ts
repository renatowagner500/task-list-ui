import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule,
CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TarefaService } from './tarefa.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    DataTableModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule,
    CalendarModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
