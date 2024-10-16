import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  private _cursos: Curso[] = [
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
  ];

  constructor() { 
  }

  get cursos(): Curso[] {
    return[...this._cursos];
  }

  agregarCurso(curso: Curso){
    this._cursos.push(curso);
  }


}
