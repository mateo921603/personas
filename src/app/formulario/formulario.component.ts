import { Component } from '@angular/core';
import { Persona } from '../persona.module';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput: string = '';
  apellidoInput: string = '';
  edadInput: number = 0;

  constructor(
    private personaServicio: PersonaService
  ) { }

  agrarPersona() {
    this.personaServicio.personas.push(new Persona(this.nombreInput, this.apellidoInput, this.edadInput));
  }

}
