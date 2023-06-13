import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from './../poke-api.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  datos: any[] = []; // Array para almacenar los datos recibidos de la API
  p: number = 1; // Página actual de la paginación
  pageSize: number = 20; // Cantidad de elementos por página
  totalItems: number = 151; // Total de elementos recibidos de la API

  constructor(private PokeAPIService: PokeAPIService) { }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    console.log("ALOJA");
    this.PokeAPIService.getData().subscribe(data => {
      console.log(data);
      this.datos = data.results;
    }, error => {
      // Maneja los errores en caso de que ocurran
    });
  }

  cambiarPagina(pagina: number) {
    this.p = pagina; // Actualizar la variable 'p' con el número de página seleccionado
    this.obtenerDatos(); // Llamar a tu método para obtener los datos de la API con la página actualizada
  }

}
