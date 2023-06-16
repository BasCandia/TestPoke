import { Component, Inject  } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detalle-dialog',
  templateUrl: './detalle-dialog.component.html',
  styleUrls: ['./detalle-dialog.component.css']
})
export class DetalleDialogComponent {

  arrIMG: any[] = [];
  IMGcomponente: any[] = [];
  boton: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public detalles: any) {
    this.arrIMG = [
      detalles.sprites.front_default,
      detalles.sprites.back_default,
      detalles.sprites.front_shiny,
      detalles.sprites.back_shiny
    ];
    this.IMGcomponente = this.arrIMG[this.boton];

  }

  ngOnInit() {
    //console.log(this.detalles);
    this.detalles.height = (this.detalles.height / 10);
    this.detalles.weight = (this.detalles.weight / 10);
    //console.log(this.arrIMG[0]);
  }

  avanzarIMG() {
    if( this.boton < 3){
      this.boton = this.boton + 1;
    }else if( this.boton == 3){
      this.boton = 0;
    }
    this.IMGcomponente = this.arrIMG[this.boton];
  }

  retrocederIMG() {
    if( this.boton > 0){
      this.boton = this.boton - 1;
    }else if( this.boton == 0){
      this.boton = 3;
    }
    this.IMGcomponente = this.arrIMG[this.boton];
  }



}
