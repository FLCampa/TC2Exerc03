import { Component, OnInit } from '@angular/core'
import { DatabaseService } from '../database.service'
import { Aluno } from '../models/aluno.model'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaAlunos: Aluno[]
  alunoSelecionado: Aluno

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {
    this.listaAlunos = this.database.getAlunos()
  }

  exibir(aluno: Aluno): void {
    this.alunoSelecionado = aluno
  }
}
