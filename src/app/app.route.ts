import {Injectable} from '@angular/core';
import { TarefaComponent } from './tarefa/tarefa.component';
import { Routes, RouterModule } from '@angular/router'
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
2


export const appRoute: Routes = [
    {
        path: 'novaTarefa',
        component: TarefaComponent
    },
    {
        path: 'listaTarefa',
        component: ListaTarefasComponent
    },
    {
        path: 'alterarTarefa/:id',
        component: TarefaComponent
    },
    ] 
    
    export const RoutingModule = RouterModule.forRoot(appRoute);
    