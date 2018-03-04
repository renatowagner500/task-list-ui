import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from './tarefa.model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor(private tarefaService: TarefaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.tarefa = new Tarefa();
  }

  tarefa: Tarefa;

  ngOnInit() {
    this.consultarTarefa();
  }

  consultarTarefa() {

    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.tarefaService.pesquisarTarefaPorId(params['id']).subscribe((tarefa) => {
          this.tarefa = tarefa;

        });
      }
    });

  }
  
  adicionarOuAtualizar (frm: FormControl) {
    if(this.tarefa.idTarefa){
      this.alterar(this.tarefa);
    }else{
      this.adicionar(this.tarefa);
    }
    
  }

  adicionar(tarefa : Tarefa) {
    this.tarefaService.adicionar(tarefa)
      .subscribe(() => {
        this.listTarefa();
      });
  }

  alterar(tarefa : Tarefa) {
    this.tarefaService.alterar(tarefa)
      .subscribe(() => {
        this.listTarefa();
      });
  }


  listTarefa() {
    this.router.navigate(['/listaTarefa']);
  }

  concluirTarefa() {
    this.tarefaService.concluir(this.tarefa).subscribe(() => {
      this.listTarefa();
    });


  }
}
