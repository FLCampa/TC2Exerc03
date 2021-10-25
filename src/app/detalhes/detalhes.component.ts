import { Component, OnInit } from '@angular/core'
import { Aluno } from '../models/aluno.model'
import { ActivatedRoute, Router } from '@angular/router'
import { DatabaseService } from '../database.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  alunoParaExibir: Aluno

  constructor(
    private database: DatabaseService,
    private rota: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAluno()
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get('id')
    this.alunoParaExibir = this.database.getAlunoById(id)
    console.log(this.alunoParaExibir)
    if (this.alunoParaExibir === undefined) {
      this.router.navigate(['/home'])
      alert('Id inválido')
    }
  }
}
