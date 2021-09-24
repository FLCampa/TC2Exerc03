import { Component, OnInit } from '@angular/core'
import { Aluno } from '../models/aluno.model'
import { listaAlunosCadastrados } from '../models/listaAlunos'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  aluno: Aluno = {
    nome: '',
    idade: 0,
    foto: ''
  }

  constructor() {}

  ngOnInit(): void {}

  cadastrar(aluno: Aluno): void {
    if (aluno.idade < 18) {
      alert('Aluno não cadastrado, idade mínima de 18 anos!')
    }
    if (aluno.nome.length === 0 || !aluno.nome.trim()) {
      alert('Aluno não cadastrado, nome vazio!')
    }
    if (aluno.foto === '') {
      aluno.foto = 'http://www.gravatar.com/avatar/?d=mp'
    } else {
      listaAlunosCadastrados.push(aluno)
      alert('Aluno ' + this.aluno.nome + ' cadastrado com sucesso!')
    }
  }
}
