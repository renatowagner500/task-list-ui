import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './tarefa/tarefa.model';

@Injectable()
export class TarefaService {

  //tarefaUrl = 'https://tasklistrenatowagner.herokuapp.com/tarefa';
  tarefaUrl = 'http://localhost:8080/tarefa';
  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<any[]>(this.tarefaUrl);
  }

  adicionar(tarefa: Tarefa) {
    return this.http.post(this.tarefaUrl, tarefa);
  }

  alterar(tarefa: Tarefa) {
    return this.http.put(this.tarefaUrl, tarefa);
  }

  concluir(tarefa: Tarefa) {
    return this.http.put(this.tarefaUrl + "Concluir", tarefa);
  }

  pesquisarTarefaPorId(id: any) {
    return this.http.get(this.tarefaUrl + `/${id}`);
  }

  excluir(id: any) {
    return this.http.delete(this.tarefaUrl + `/${id}`);
  }

}
