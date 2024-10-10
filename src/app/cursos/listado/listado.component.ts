import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { PrincipalComponent } from '../principal/principal.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule,
    PrincipalComponent
  ],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  @Input() cursos: Curso[] = [];
}
