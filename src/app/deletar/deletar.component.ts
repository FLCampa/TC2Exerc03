import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DatabaseService } from '../database.service'
import { Aluno } from '../models/aluno.model'

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {
  alunoParaDeletar: Aluno

  constructor(
    private database: DatabaseService,
    private rota: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAluno()
    this.deletarAluno()
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get('id')
    this.alunoParaDeletar = this.database.getAlunoById(id)
    console.log(this.alunoParaDeletar)
  }

  deletarAluno(): void {
    if (this.database.deletarAluno(this.alunoParaDeletar)) {
      alert('Aluno deletado!')
      this.router.navigate(['/home'])
    }
  }
}
