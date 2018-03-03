import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TarefaService } from '../tarefa.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tarefaService : TarefaService) { }

  tarefas = [];


  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.tarefaService.listar().subscribe(tarefas => this.tarefas = tarefas);
  }

  adicionar (frm : FormControl){
    this.tarefaService.adicionar(frm.value)
    .subscribe(() => {
      frm.reset();
      this.consultar();
    });
  }

}
