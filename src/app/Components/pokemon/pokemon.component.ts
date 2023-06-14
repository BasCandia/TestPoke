import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../../Services/poke-api.service';
import { PaginationInstance } from 'ngx-pagination';
import { MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { DetalleDialogComponent } from './detalle-dialog/detalle-dialog.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //LISTA PAGINADA
  datos: any[] = []; // Array para datos de la API
  p: number = 1; // Página actual de la paginación
  pageSize: number = 20; // Cantidad de elementos por página
  totalItems: number = 0; // Total de elementos recibidos de la API

  //LISTA FILTRADA
  filtroNombre: string = '';
  datosOriginales: any[] = [];
  datosFiltrados: any[] = [];

  //ORDEN ASCENDENTE Y DESCENDENTE
  ordenAscendente: boolean = true;

  //DIALOG ESPECIFICO
  datoPokemon: any[] = [];

  dialogRef!: MatDialogRef<DetalleDialogComponent>;

  constructor(private PokeAPIService: PokeAPIService, private dialog: MatDialog) { }


  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    //console.log("ALOJA");
    this.PokeAPIService.getData().subscribe(data => {
      console.log(data);
      this.datos = data.results;
      this.totalItems = this.datos.length;
      this.datosOriginales = this.datos;
      this.aplicarFiltro();
    }, error => {
      // Maneja los errores en caso de que ocurran
    });
  }

  cambiarPagina(pagina: number) {
    this.p = pagina;
    this.obtenerDatos();
  }

  aplicarFiltro() {
    let datosFiltrados = this.datosOriginales.filter(dato => {
      const nombre = dato.name.toLowerCase();
      const filtro = this.filtroNombre.toLowerCase();
      return nombre.includes(filtro);
    });

    datosFiltrados.sort((a, b) => {
      const nombreA = a.name.toLowerCase();
      const nombreB = b.name.toLowerCase();

      if (nombreA < nombreB) {
        return this.ordenAscendente ? -1 : 1;
      } else if (nombreA > nombreB) {
        return this.ordenAscendente ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.datosFiltrados = datosFiltrados;
  }

  ordenarAscendente() {
    this.ordenAscendente = true;
    this.aplicarFiltro();
  }

  ordenarDescendente() {
    this.ordenAscendente = false;
    this.aplicarFiltro();
  }

  abrirDialogo(dato: any): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
     //console.log("ALOJA");
     this.PokeAPIService.getDataEspecifico(dato.name).subscribe(data => {
      //console.log(data);
      this.datoPokemon = data;

      this.dialogRef = this.dialog.open(DetalleDialogComponent, {
        width: '400px',
        data: this.datoPokemon
      });

      this.dialogRef.afterClosed().subscribe(result => {
        console.log('Diálogo cerrado');
      });

    }, error => {
      // Maneja los errores en caso de que ocurran
    });
  }



}
