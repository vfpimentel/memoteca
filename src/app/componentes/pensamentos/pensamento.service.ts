import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly url = ' http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  editar(pensamento : Pensamento) : Observable<Pensamento> {
    const url = `${this.url}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.url}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.url);
  }

  criar(_pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.url, _pensamento);
  }
}
