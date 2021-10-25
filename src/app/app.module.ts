import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { DetalhesComponent } from './detalhes/detalhes.component'
import { MenuComponent } from './menu/menu.component'
import { ListaComponent } from './lista/lista.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { DeletarComponent } from './deletar/deletar.component';
import { EditarComponent } from './editar/editar.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DetalhesComponent,
    MenuComponent,
    ListaComponent,
    DeletarComponent,
    EditarComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
