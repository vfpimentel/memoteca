import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento : Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit()...");
  }

  criarPensamento() {
    //alert("novo pensamento criado");
  }

  cancelar() {
    //alert("Ação cancelada!")
  }

}
