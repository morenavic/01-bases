import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from "../listado/listado.component";
import { Curso } from '../interfaces/curso.interface';
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    ListadoComponent, AgregarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  nuevoCurso: Curso = { 
    nombre: '',
    descripcion: ''
  };

  cursos: Curso[] = [
    {
      nombre: 'JavaScript',
      descripcion: 'Nivel INTERMEDIO'
    },
    {
      nombre: 'Oracle',
      descripcion: 'Nivel BÁSICO'
    },
    {
      nombre: 'Angular',
      descripcion: 'Nivel EXPERTO'
    }
  ]

//   agregar() {
//     if(this.nuevoCurso.nombre.trim().length===0 || this.nuevoCurso.descripcion.trim().length===0){
//       return;
//     }

//     this.cursos.push(this.nuevoCurso);

//     this.nuevoCurso = { 
//       nombre: '',
//       descripcion: ''
//     };
// }

agregarNuevoCurso(curso:Curso) {
  this.cursos.push(curso);
  }

}
