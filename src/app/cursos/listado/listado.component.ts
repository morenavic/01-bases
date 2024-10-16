import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { PrincipalComponent } from '../principal/principal.component';
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  constructor(private cursosService: CursosService){

  }

  get cursos(){
    return this.cursosService.cursos
  }
}
