import { Component, Input, OnInit } from '@angular/core'
import { Aluno } from '../models/aluno.model'
import { listaAlunosCadastrados } from '../models/listaAlunos'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() listarAlunos: boolean
  listaAlunos: Aluno[]
  alunoSelecionado: Aluno

  constructor() {}

  ngOnInit(): void {
    this.listaAlunos = listaAlunosCadastrados
  }

  exibir(aluno: Aluno): void {
    this.alunoSelecionado = aluno
  }
}
