import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule,
CalendarModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { NavbarComponent } from './navbar/navbar.component';
import { TarefaService } from './tarefa.service';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './app.route';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaTarefasComponent,
    TarefaComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoute),
    BrowserAnimationsModule,
    BrowserModule,
    DataTableModule,
    ButtonModule, 
    InputTextModule, 
    InputMaskModule,
    CalendarModule,
    HttpClientModule,
    FormsModule, 
    ConfirmDialogModule
    
    
  ],
  providers: [TarefaService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
