import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component'
import { DeletarComponent } from './deletar/deletar.component'
import { DetalhesComponent } from './detalhes/detalhes.component'
import { EditarComponent } from './editar/editar.component'
import { ListaComponent } from './lista/lista.component'

const routes: Routes = [
  { path: 'home', component: ListaComponent },
  { path: 'register', component: CadastroComponent },
  { path: 'details/:id', component: DetalhesComponent },
  { path: 'edit/:id', component: EditarComponent },
  { path: 'delete/:id', component: DeletarComponent },
  { path: '**', redirectTo: '/home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
