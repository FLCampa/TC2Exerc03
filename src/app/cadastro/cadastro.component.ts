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
    if (aluno.idade < 18 || aluno.nome.length === 0 || !aluno.nome.trim()) {
      alert('Erro, houve algum erro no cadastro!')
      return
    }
    if (aluno.foto === '') {
      aluno.foto = 'http://www.gravatar.com/avatar/?d=mp'
    }
    listaAlunosCadastrados.push(aluno)
    alert('Sucesso, Aluno ' + this.aluno.nome + ' cadastrado!')
  }
}
