import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { PersonaService } from './persona.service';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
  declarations: [	
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
