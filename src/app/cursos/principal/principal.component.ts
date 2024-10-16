import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from "../listado/listado.component";
import { Curso } from '../interfaces/curso.interface';
import { AgregarComponent } from "../agregar/agregar.component";
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    ListadoComponent, 
    AgregarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})

export class PrincipalComponent {

  constructor(private cursosService: CursosService){
  }

}
