import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  listarAlunos: boolean = true
  novoAluno: boolean = false

  constructor() {}

  ngOnInit(): void {}

  mostrarListaAlunos(): void {
    this.listarAlunos = true
    this.novoAluno = false
  }

  mostrarTelaCadastro(): void {
    this.listarAlunos = false
    this.novoAluno = true
  }
}
