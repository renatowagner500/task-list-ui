import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas = [];

  constructor(private tarefaService : TarefaService, private activatedRoute : ActivatedRoute, private router : Router, private confirmationService: ConfirmationService ) { }
  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.tarefaService.listar().subscribe(tarefas => this.tarefas = tarefas);
   
  }

  excluir(id:number){
    if(confirm("Deseja excluir esta tarefa?")){
      this.tarefaService.excluir(id).subscribe((tarefa) => {
        this.consultar();

      });
    }
  }





 

}
