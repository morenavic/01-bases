import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Curso {
  nombre: string,
  descripcion: string
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
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

  agregar() {
    if(this.nuevoCurso.nombre.trim().length===0 || this.nuevoCurso.descripcion.trim().length===0){
      return;
    }

    this.cursos.push(this.nuevoCurso);

    this.nuevoCurso = { 
      nombre: '',
      descripcion: ''
    };
}

}
