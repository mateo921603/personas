import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.module';
import { PersonaService } from '../../persona.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nombreInput: string = '';
  apellidoInput: string = '';
  edadInput: number = 0;
  index:number=0;

  constructor(
    private personaServicio: PersonaService,
    private router:Router,
    private rout:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.index = this.rout.snapshot.params['id'];
    if(this.index){
      let persona:Persona = this.personaServicio.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
      this.edadInput = persona.edad;
    }
  }

  guardarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput, this.edadInput);
    if(this.index){
      this.personaServicio.modificarPersona(this.index, persona1);
    }else{
      this.personaServicio.agregarPersona(persona1);
    }
    
    this.router.navigate(['personas']);
  }

}
