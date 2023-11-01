import { Persona } from "./persona.module";


export class PersonaService {
    personas: Persona[] = [];

    eliminar(persona: Persona) {
        const indice: number = this.personas.indexOf(persona);
        this.personas.splice(indice, 1);
    }
}
