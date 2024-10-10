import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {


  @Input() nuevoCurso: Curso = {
    nombre: '',
    descripcion:''
  }

  @Output() onNuevoCurso: EventEmitter<Curso> = new EventEmitter();

  agregar() {
    this.onNuevoCurso.emit(this.nuevoCurso);
  }
}
