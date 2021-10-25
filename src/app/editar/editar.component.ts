import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { DatabaseService } from '../database.service'
import { Aluno } from '../models/aluno.model'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formEditar: FormGroup
  alunoParaEditar: Aluno

  constructor(
    private database: DatabaseService,
    private rota: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAluno()
    this.initForm()
  }

  private initForm() {
    let fotoPadrao = 'http://www.gravatar.com/avatar/?d=mp'

    if (this.alunoParaEditar.foto == fotoPadrao) {
      this.alunoParaEditar.foto = ''
    }
    this.formEditar = new FormGroup({
      nome: new FormControl(this.alunoParaEditar.nome, [
        Validators.required,
        Validators.minLength(5)
      ]),
      idade: new FormControl(this.alunoParaEditar.idade, [
        Validators.required,
        Validators.min(18)
      ]),
      foto: new FormControl(this.alunoParaEditar.foto)
    })
  }

  onSubmit(): void {
    if (this.formEditar.valid) {
      if (
        this.database.editarAluno(this.formEditar.value, this.alunoParaEditar)
      ) {
        alert('Aluno editado!')
        this.router.navigate(['/home'])
      }
    } else {
      alert('Erro ao editar aluno!')
    }
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get('id')
    console.log(id)
    this.alunoParaEditar = this.database.getAlunoById(id)
    console.log(this.alunoParaEditar)
  }
}
