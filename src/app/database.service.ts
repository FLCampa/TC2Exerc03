import { Injectable } from '@angular/core'
import { Aluno } from './models/aluno.model'
import { listaAlunosCadastrados } from './models/listaAlunos'
import { v4 as uuidv4 } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  listaAlunos: Aluno[] = listaAlunosCadastrados

  constructor() {}

  getAlunos(): Aluno[] {
    return this.listaAlunos
  }

  getAlunoById(id: string): Aluno {
    for (let aluno of this.listaAlunos) {
      if (aluno.id == id) {
        return aluno
      }
    }
  }

  cadastrarAluno(aluno: Aluno): boolean {
    if (aluno.idade < 18 || aluno.nome.length === 0 || !aluno.nome.trim()) {
      return false
    }
    if (aluno.foto == null || aluno.foto == '') {
      aluno.foto = 'http://www.gravatar.com/avatar/?d=mp'
    }
    aluno.id = uuidv4()
    this.listaAlunos.push(aluno)
    return true
  }

  editarAluno(alunoNovo: Aluno, alunoParaEditar: Aluno): boolean {
    let index = this.listaAlunos.indexOf(alunoParaEditar)
    if (index > -1) {
      alunoNovo.id = alunoParaEditar.id
      this.listaAlunos[index] = alunoNovo
      return true
    }
    return false
  }

  deletarAluno(aluno: Aluno): boolean {
    let index = this.listaAlunos.indexOf(aluno)
    if (index > -1) {
      this.listaAlunos.splice(index, 1)
      return true
    }
    return false
  }
}
