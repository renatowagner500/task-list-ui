import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TarefaService {

  tarefaUrl = 'https://tasklistrenatowagner.herokuapp.com/tarefa';
  constructor(private http:HttpClient) { }


  listar(){
   return this.http.get<any[]>(this.tarefaUrl);
  }

  adicionar(item : any){
    return this.http.post(this.tarefaUrl, item);
  }

}
