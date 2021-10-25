import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DatabaseService } from '../database.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup

  constructor(private database: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.initForm()
  }

  private initForm() {
    this.formCadastro = new FormGroup({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      idade: new FormControl(null, [Validators.required, Validators.min(18)]),
      foto: new FormControl(null)
    })
  }

  onSubmit(): void {
    if (this.formCadastro.valid) {
      if (this.database.cadastrarAluno(this.formCadastro.value)) {
        alert('Fomulário enviado!')
        this.router.navigate(['/home'])
      }
    } else {
      alert('Erro, houve algum erro no cadastro!')
    }
  }
}
