import { Component, Input, OnInit } from '@angular/core'
import { Aluno } from '../models/aluno.model'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  @Input() alunoParaExibir: Aluno

  constructor() {}

  ngOnInit(): void {}
}
