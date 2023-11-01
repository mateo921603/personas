import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona.module';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas:Persona[]=[]
  constructor(private personaService:PersonaService){}
  ngOnInit(){
    this.personas = this.personaService.personas;
  }
  
  eliminarPersona(persona:Persona){
    this.personaService.eliminar(persona);
  }
}
