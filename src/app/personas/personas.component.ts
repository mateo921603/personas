import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private router:Router ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}
