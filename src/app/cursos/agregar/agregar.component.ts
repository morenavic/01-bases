import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { FormsModule} from '@angular/forms';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})

export class AgregarComponent {

  // hacemos uso del servicio
  constructor(private cursosService: CursosService){

  }

  nuevoCurso: Curso = {
    nombre: '',
    descripcion:''
  }

  agregar() {
    this.cursosService.agregarCurso(this.nuevoCurso);
    // limpiar y que no queden residuos del curso agregado anteriormente
    this.nuevoCurso = {
      nombre: '',
      descripcion: ''
    }
  }
}
