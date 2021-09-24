import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CadastroComponent } from './cadastro/cadastro.component'
import { DetalhesComponent } from './detalhes/detalhes.component'
import { MenuComponent } from './menu/menu.component'
import { ListaComponent } from './lista/lista.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    DetalhesComponent,
    MenuComponent,
    ListaComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
