import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from './cursos/principal/principal.component';
import { ListadoComponent } from './cursos/listado/listado.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PrincipalComponent,
  ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-bases';
}
