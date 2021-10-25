import { v4 as uuidv4 } from 'uuid'
import { Aluno } from './aluno.model'

export var listaAlunosCadastrados: Aluno[] = [
  {
    id: uuidv4(),
    nome: 'Nicolas Cage',
    idade: 57,
    foto: 'https://www.placecage.com/200/300'
  },
  {
    id: uuidv4(),
    nome: 'Steven Seagal',
    idade: 69,
    foto: 'https://www.stevensegallery.com/200/300'
  },
  {
    id: uuidv4(),
    nome: 'Morpheus',
    idade: 67,
    foto: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Morpheus.jpg/220px-Morpheus.jpg'
  },
  {
    id: uuidv4(),
    nome: 'Neo',
    idade: 55,
    foto: 'https://acervo.revistabula.com/arquivos/posts/images/312/matrix_neo.jpg'
  }
]
