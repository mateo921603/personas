import { Persona } from "./persona.module";


export class PersonaService {
    personas: Persona[] = [];

    eliminar(persona: Persona) {
        const indice: number = this.personas.indexOf(persona);
        this.personas.splice(indice, 1);
    }

    agregarPersona(persona:Persona){
        this.personas.push(persona);
    }

    encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        return persona;
    }

    modificarPersona(index:number,persona:Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        persona1.edad = persona.edad;
    }
    

}
